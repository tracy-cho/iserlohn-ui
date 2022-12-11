import React, { Children, cloneElement, useState } from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

function Container({ children }: commonPropsWithChildren<"div">) {
	const [currentIdx, setCurrentIdx] = useState<number>(-1);
	const clonedChildren = Children.toArray(children).map((child, index) =>
		cloneElement(child as React.ReactElement, {
			isDrag: false,
			isOver: false,
			idx: index
		})
	);

	/**
	 * NOTE: 추가된 props를 인식하지 못해서 ts error가 발생하기 때문에 any로 타입을 지정해둔다.
	 */
	const [list, setList] = useState<any[]>(() => clonedChildren);

	return (
		<div className={cx("Container")}>
			{list.map((element, index) => {
				const { props } = element;
				/**
				 * NOTE: Exclude properties used only and not inherited in Container
				 */
				const { isOver, isDrag, idx, ..._props } = props;
				return (
					<element.type
						key={_props.idx}
						{..._props}
						onDragStart={() => {
							setList((prev) =>
								prev.map((_item) =>
									props.idx === _item.idx
										? {
												..._item,
												isDrag: true
										  }
										: _item
								)
							);
							setCurrentIdx(index);
						}}
						onDragEnd={() => {
							setList((prev) =>
								prev.map((_item) =>
									props.idx === _item.idx
										? {
												..._item,
												isDrag: false
										  }
										: _item
								)
							);
							setCurrentIdx(-1);
						}}
						onDragOver={() => {
							// change order
							if (currentIdx === index) {
								return;
							}
							const _list = [...list];
							const [removed] = _list.splice(currentIdx, 1);
							_list.splice(index, 0, removed);
							setList(_list);
							setCurrentIdx(index);
						}}
					/>
				);
			})}
		</div>
	);
}

export default Container;

import React, {Children, cloneElement, ReactNode, useState} from "react";
import classNames from "classnames/bind";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

export type ContainerProps = {
    children: ReactNode
};

function Container({children}: ContainerProps) {
    const [currentIdx, setCurrentIdx] = useState<number>(-1);
    const [list, setList] = useState(Children.toArray(children).map((child, index) =>
        cloneElement(child as React.ReactElement, {
            isDrag: false,
            isOver: false,
            idx: index
        })));
    return (
        <div className={cx('Container')}>
            {list.map((element, index) => {
                const {props} = element;
                // Exclude properties used only and not inherited in Container
                const {isOver, isDrag, idx, ..._props} = props;
                return <element.type
                    key={_props.idx}
                    {..._props}
                    onDragStart={() => {
                        setList(prev => prev.map(_item => props.idx === _item.idx ? ({
                            ..._item,
                            isDrag: true
                        }) : _item));
                        setCurrentIdx(index)
                    }}
                    onDragEnd={() => {
                        setList(prev => prev.map(_item => props.idx === _item.idx ? ({
                            ..._item,
                            isDrag: false
                        }) : _item));
                        setCurrentIdx(-1)
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
            })}
        </div>
    );
}

export default Container;
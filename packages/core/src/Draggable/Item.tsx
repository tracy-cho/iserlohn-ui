import React from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Item.module.scss";

const cx = classNames.bind(styles);

function Item({ children, ...props }: commonPropsWithChildren<"div">) {
	return (
		<div
			draggable
			className={cx("Item", props.__dangerouslySetClassName)}
			{...props}>
			{children}
		</div>
	);
}

export default Item;

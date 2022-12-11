import React from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Trigger.module.scss";

const cx = classNames.bind(styles);

function Trigger({
	children,
	__dangerouslySetClassName
}: commonPropsWithChildren<"div">) {
	return (
		<div className={cx("Trigger", __dangerouslySetClassName)}>{children}</div>
	);
}

export default Trigger;

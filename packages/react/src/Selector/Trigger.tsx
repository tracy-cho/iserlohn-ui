import React, { useContext, useEffect } from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Trigger.module.scss";
// import { useSelector } from "./useSelector";
// import { SelectorContext } from "./Container";

const cx = classNames.bind(styles);

/**
 * children은 기본값.
 */
function Trigger({
	children,
	__dangerouslySetClassName
}: commonPropsWithChildren<"div">) {
	// const { selectedValues } = useContext(SelectorContext);
	// console.log(selectedValues);

	// useEffect(() => {
	// 	console.log(Object.values(selectedValues));
	// }, [selectedValues]);
	return (
		<div className={cx("Trigger", __dangerouslySetClassName)}>
			00000 {children}
			{/*{Object.values(selectedValues).length !== 0*/}
			{/*	? JSON.stringify(selectedValues)*/}
			{/*	: children}*/}
			00000
		</div>
	);
}

export default Trigger;

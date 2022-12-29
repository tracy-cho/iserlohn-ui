import React from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Option.module.scss";

export type OptionProps = {};

const cx = classNames.bind(styles);

function Option({
	value,
	name,
	type,
	children
}: commonPropsWithChildren<"input">) {
	return (
		<label className={cx("Option")}>
			<input type={type} value={value} name={name} />
			{children}
		</label>
	);
}

export default Option;

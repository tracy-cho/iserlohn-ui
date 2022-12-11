import React from "react";
import classNames from "classnames/bind";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Option.module.scss";

export type OptionProps = {};

const cx = classNames.bind(styles);

function Option({ children }: commonPropsWithChildren<"input">) {
	return <div className={cx("Option")}>{children}</div>;
}

export default Option;

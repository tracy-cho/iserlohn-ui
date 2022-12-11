import React from "react";
import classNames from "classnames/bind";

import styles from "./Container.module.scss";
import { commonPropsWithChildren } from "../common/common.types";

const cx = classNames.bind(styles);

function Container({ children }: commonPropsWithChildren<"form">) {
	return <form className={cx("Container")}>{children}</form>;
}

export default Container;

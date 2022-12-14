import React, { ChangeEvent } from "react";
import classNames from "classnames/bind";

import { useSelector } from "./useSelector";

import { commonPropsWithChildren } from "../common/common.types";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

function Container({ children }: commonPropsWithChildren<"form">) {
	const [selector, setSelector] = useSelector();
	return (
		<form
			className={cx("Container")}
			onChange={(e: ChangeEvent<HTMLFormElement>) => {
				const { target } = e;
				const type = target.getAttribute("type");
				if (type === "checkbox") {
					if (target.checked) {
						//@ts-ignore
						setSelector((prev) => ({
							...prev,
							//@ts-ignore
							selectedValues: {
								...prev.selectedValues,
								[target.name]: [
									...(prev.selectedValues[target.name] ?? []),
									target.value
								]
							}
						}));
					} else {
						//@ts-ignore
						setSelector((prev) => ({
							...prev,
							selectedValues: {
								...prev.selectedValues,
								[target.name]: prev.selectedValues[target.name]?.filter(
									//@ts-ignore
									(value) => value !== target.value
								)
							}
						}));
					}
				} else if (type === "radio") {
					//@ts-ignore
					setSelector((prev) => ({
						...prev,
						//@ts-ignore
						selectedValues: {
							...prev.selectedValues,
							[target.name]: [target.value]
						}
					}));
				}
			}}>
			{children}
		</form>
	);
}

export default Container;

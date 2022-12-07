import React, {ComponentProps, ReactNode} from "react";
import classNames from "classnames/bind";

import styles from "./Item.module.scss";

export type ItemProps = Omit<ComponentProps<"input">, "className"> & {
    __dangerouslySetClassName?: string;
    children: ReactNode
};

const cx = classNames.bind(styles);

function Item({children, ...props}: ItemProps) {
    return (
        <div
            draggable
            className={cx('Item', props.__dangerouslySetClassName)}
            {...props}
        >
            {children}
        </div>
    );
}

export default Item;
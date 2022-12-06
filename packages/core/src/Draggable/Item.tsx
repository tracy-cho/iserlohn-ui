import React, {ComponentProps} from "react";
import classNames from "classnames/bind";

import styles from "./Item.module.scss";

export type ItemProps = ComponentProps<"input"> & {};

const cx = classNames.bind(styles);

function Item({...props}: ItemProps) {

    return (
        <div
            draggable
            {...props}
        >
            aaaaaaaaaaaaaaaaaaaa
        </div>
    );
}

export {Item};
import React, {ComponentProps, ReactNode} from "react";

import styles from "./Checkbox.module.scss";

export type CheckboxProps = Omit<ComponentProps<"input">, "className" & "type"> & {
    children: ReactNode;
};

function Checkbox({children, ...props}: CheckboxProps) {
    return (
        <label className={styles.Checkbox}>
            <input className={styles.input} type={'checkbox'} {...props} />
            <div className={styles.check}/>
            <span className={styles.span}>{children}</span>
        </label>
    );
}

export default Checkbox;
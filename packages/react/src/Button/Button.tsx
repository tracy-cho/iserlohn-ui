import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: React.ReactNode;
};

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
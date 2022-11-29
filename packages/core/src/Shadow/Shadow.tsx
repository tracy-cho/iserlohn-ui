import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import styles from "./Shadow.module.scss";

export type ShadowProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: ReactNode;
};

function Shadow({ children, ...props }: ShadowProps) {
  return (
    <div {...props} className={styles.Shadow}>
      {children}
    </div>
  );
}

export default Shadow;
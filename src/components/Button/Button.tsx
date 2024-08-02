import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps): ReactNode {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

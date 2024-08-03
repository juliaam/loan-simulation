import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({
  children,
  className,
  ...props
}: ButtonProps): ReactNode {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}

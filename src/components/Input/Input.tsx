import { ComponentProps, ReactNode } from "react";
import styles from "./input.module.scss";

export function Input(props: ComponentProps<"input">): ReactNode {
  return <input className={styles.input} {...props}></input>;
}

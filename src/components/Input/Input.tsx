import { ComponentProps, ReactElement, forwardRef, Ref } from "react";
import styles from "./Input.module.scss";

interface InputProps extends ComponentProps<"input"> {
  mask?: string;
}

function Input(
  { name, type = "text", ...props }: InputProps,
  ref: Ref<HTMLInputElement>
): ReactElement {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      ref={ref}
      {...props}
    />
  );
}

const ForwardedInput = forwardRef(Input);

export { ForwardedInput as Input };

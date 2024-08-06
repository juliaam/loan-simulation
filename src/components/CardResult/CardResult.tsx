import { ReactNode } from "react";
import styles from "./CardResult.module.scss";

interface CardResultProps {
  title: string;
  value: string | number | undefined;
}

export function CardResult({ title, value }: CardResultProps): ReactNode {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.result}>{value ?? ""}</p>
    </div>
  );
}

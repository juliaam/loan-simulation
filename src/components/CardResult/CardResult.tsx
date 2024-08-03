import { ReactNode } from "react";
import styles from "./CardResult.module.scss";

interface CardResultProps {
  title: string;
  result: string;
}

export function CardResult({ title, result }: CardResultProps): ReactNode {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.result}>{result}</p>
    </div>
  );
}

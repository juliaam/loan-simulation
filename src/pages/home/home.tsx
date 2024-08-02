import { ReactNode } from "react";
import styles from "./home.module.scss";
import { Simulation } from "../../components/Simulation/Simulation";

export function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <p className={styles.title}>Simule e solicite o seu empréstimo.</p>
      <Simulation />
    </div>
  );
}

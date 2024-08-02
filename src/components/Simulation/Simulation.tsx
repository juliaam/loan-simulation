import { ReactNode } from "react";
import { SimulationForm } from "./SimulationForm/SimulationForm";
import styles from "./Simulation.module.scss";

export function Simulation(): ReactNode {
  return (
    <div className={styles.simulation}>
      <p className={styles.title}>Preencha o formulário abaixo para simular</p>
      <SimulationForm />
    </div>
  );
}

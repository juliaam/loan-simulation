import { ReactNode } from "react";
import { SimulationForm } from "./SimulationForm/SimulationForm";
import styles from "./Simulation.module.scss";
import { SimulationResult } from "./SimulationResult/SimulationResult";

export function Simulation(): ReactNode {
  return (
    <div className={styles.simulation}>
      <p className={styles.formTitle}>
        Preencha o formulário abaixo para simular
      </p>
      <SimulationForm />
      <p className={styles.resultTitle}>
        Veja a simulação para o seu empréstimo antes de efetivar
      </p>
      <SimulationResult />
    </div>
  );
}

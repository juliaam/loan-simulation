import { ReactNode, useState } from "react";
import { SimulationForm } from "./SimulationForm/SimulationForm";
import styles from "./Simulation.module.scss";
import { SimulationResult } from "./SimulationResult/SimulationResult";
import { ISimulationFormSchema } from "./SimulationForm/SimulationForm";
import { LoanService } from "../../services/loan";

export function Simulation(): ReactNode {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSimulationForm = async (data: ISimulationFormSchema) => {
    setLoading(true);
    await LoanService.simulate(data);
    setLoading(false);
  };
  return (
    <div className={styles.simulation}>
      <p className={styles.formTitle}>
        Preencha o formulário abaixo para simular
      </p>
      <SimulationForm onSubmitForm={handleSimulationForm} />
      <p className={styles.resultTitle}>
        Veja a simulação para o seu empréstimo antes de efetivar
      </p>
      <SimulationResult loading={loading} />
    </div>
  );
}

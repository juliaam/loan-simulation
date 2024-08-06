import { ReactNode, useState } from "react";
import { SimulationForm } from "./SimulationForm/SimulationForm";
import styles from "./Simulation.module.scss";
import { SimulationResult } from "./SimulationResult/SimulationResult";
import { ISimulationFormSchema } from "./SimulationForm/SimulationForm";
import { ISimulationResult, LoanService } from "../../services/loan";

export function Simulation(): ReactNode {
  const [requestSimulation, setRequestSimulation] =
    useState<ISimulationFormSchema | null>(null);
  const [resultSimulation, setResultSimulation] =
    useState<ISimulationResult | null>(null);

  const handleSimulationForm = async (data: ISimulationFormSchema) => {
    const result = await LoanService.simulate(data);

    setRequestSimulation(data);
    if (result) {
      setResultSimulation(result);
    }
  };

  return (
    <div className={styles.simulation}>
      <p className={styles.formTitle}>
        Preencha o formulário abaixo para simular
      </p>
      <SimulationForm onSubmitForm={handleSimulationForm} />
      {requestSimulation && resultSimulation && (
        <>
          <p className={styles.resultTitle}>
            Veja a simulação para o seu empréstimo antes de efetivar
          </p>
          <SimulationResult
            requestSimulation={requestSimulation}
            resultSimulation={resultSimulation}
          />
        </>
      )}
    </div>
  );
}

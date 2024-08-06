import React, { ReactNode } from "react";
import { CardResult } from "../../CardResult/CardResult";
import styles from "./SimulationResult.module.scss";
import { Button } from "../../Button/Button";
import { ISimulationFormSchema } from "../SimulationForm/SimulationForm";
import { ISimulationResult } from "../../../services/loan";

const columns = [
  "SALDO DEVEDOR",
  "JUROS",
  "SALDO DEVEDOR AJUSTADO",
  "VALOR DA PARCELA",
  "VENCIMENTO",
];

interface ISimulationResultProps {
  requestSimulation: ISimulationFormSchema;
  resultSimulation: ISimulationResult;
}

export function SimulationResult({
  requestSimulation,
  resultSimulation,
}: ISimulationResultProps): ReactNode {
  return (
    <>
      <div className={styles.simulationResult}>
        <div className={styles.simulationHeader}>
          <CardResult
            title="VALOR REQUERIDO:"
            value={requestSimulation.total_value}
          />
          <CardResult
            title="TAXA DE JUROS:"
            value={resultSimulation.totalPerCent}
          />
          <CardResult
            title="VALOR QUE DESEJA PAGAR POR MÊS"
            value={requestSimulation.month_value}
          />
          <CardResult
            title="TOTAL DE MESES PARA QUITAR"
            value={resultSimulation.monthsToQuit}
          />
          <CardResult
            title="TOTAL DE JUROS"
            value={resultSimulation.totalInterest}
          />
          <CardResult
            title="TOTAL A PAGAR"
            value={resultSimulation.totalWithInterest}
          />
        </div>
        <p className={styles.installmentsTitle}>PROJEÇÃO DAS PARCELAS:</p>
        <div className={styles.simulationInstallments}>
          <div className={styles.installmentsColumns}>
            {columns.map((column) => (
              <p className={styles.column} key={column}>
                {column}
              </p>
            ))}
          </div>
          {resultSimulation.parcels.map((row) => (
            <React.Fragment key={row.outstandingBalance}>
              <hr className={styles.divider} />
              <div
                key={row.outstandingBalance}
                className={styles.installmentsRow}
              >
                <p className={styles.row}>{row.outstandingBalance}</p>
                <p className={styles.row}>{row.interest}</p>
                <p className={styles.row}>{row.adjustedOutstandingBalance}</p>
                <p className={styles.row}>{row.installmentAmount}</p>
                <p className={styles.row}>{row.dueDate}</p>
              </div>
              <hr className={styles.divider} />
            </React.Fragment>
          ))}
        </div>

        <Button className={styles.button}> EFETIVAR O EMPRÉSTIMO</Button>
      </div>
    </>
  );
}

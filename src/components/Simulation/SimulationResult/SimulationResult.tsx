import { ReactNode } from "react";
import { CardResult } from "../../CardResult/CardResult";
import styles from "./SimulationResult.module.scss";
import { Button } from "../../Button/Button";

const columns = [
  "SALDO DEVEDOR",
  "JUROS",
  "SALDO DEVEDOR AJUSTADO",
  "VALOR DA PARCELA",
  "VENCIMENTO",
];

const rows = [
  {
    id: 1,
    outstandingBalance: "R$ 60.000,00",
    interest: "R$ 600,00",
    adjustedOutstandingBalance: "R$ 60.600,00",
    installmentAmount: "R$ 15.000,00",
    dueDate: "20/09/21",
  },
];

export function SimulationResult(): ReactNode {
  return (
    <div className={styles.simulationResult}>
      <div className={styles.simulationHeader}>
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
        <CardResult title="VALOR REQUERIDO:" result="R$ 60.000,00" />
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
        {rows.map((row) => (
          <div key={row.id} className={styles.installmentsRow}>
            <p className={styles.row}>{row.outstandingBalance}</p>
            <p className={styles.row}>{row.interest}</p>
            <p className={styles.row}>{row.adjustedOutstandingBalance}</p>
            <p className={styles.row}>{row.installmentAmount}</p>
            <p className={styles.row}>{row.dueDate}</p>
          </div>
        ))}
      </div>

      <Button className={styles.button}> EFETIVAR O EMPRÉSTIMO</Button>
    </div>
  );
}

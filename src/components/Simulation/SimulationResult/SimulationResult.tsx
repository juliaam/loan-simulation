import React, { ReactNode, useState } from "react";
import { CardResult } from "../../CardResult/CardResult";
import { Button } from "../../Button/Button";
import { ISimulationFormSchema } from "../SimulationForm/SimulationForm";
import { ISimulationResult } from "../../../services/loan";
import styles from "./SimulationResult.module.scss";
import { Handshake } from "lucide-react";

const columns = [
  "SALDO DEVEDOR",
  "JUROS",
  "SALDO DEVEDOR AJUSTADO",
  "VALOR DA PARCELA",
  "VENCIMENTO",
];

const formatMoney = (price: string | number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(price)
  );

const formatDate = (date: string) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

interface ISimulationResultProps {
  requestSimulation: ISimulationFormSchema;
  resultSimulation: ISimulationResult;
  handleLoan?: () => void;
}

export function SimulationResult({
  requestSimulation,
  resultSimulation,
}: ISimulationResultProps): ReactNode {
  console.log(typeof requestSimulation.total_value, "resultSimulation");
  const [message, setMessage] = useState(false);

  const handleLoan = () => {
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className={styles.simulationResult}>
        <div className={styles.simulationHeader}>
          <CardResult
            title="VALOR REQUERIDO:"
            value={formatMoney(requestSimulation.total_value)}
          />

          <CardResult
            title="TAXA DE JUROS:"
            value={`${resultSimulation.totalPerCent.toFixed(2)}%`}
          />
          <CardResult
            title="VALOR QUE DESEJA PAGAR POR MÊS"
            value={formatMoney(requestSimulation.month_value)}
          />
          <CardResult
            title="TOTAL DE MESES PARA QUITAR"
            value={resultSimulation.monthsToQuit}
          />
          <CardResult
            title="TOTAL DE JUROS"
            value={formatMoney(resultSimulation.totalInterest.toFixed(2))}
          />
          <CardResult
            title="TOTAL A PAGAR"
            value={formatMoney(resultSimulation.totalWithInterest.toFixed(2))}
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
            <React.Fragment key={row.outStadingBalance}>
              <hr className={styles.divider} />
              <div
                key={row.outStadingBalance}
                className={styles.installmentsRow}
              >
                <p className={styles.row}>
                  {formatMoney(row.outStadingBalance)}
                </p>
                <p className={styles.row}>{formatMoney(row.interest)}</p>
                <p className={styles.row}>
                  {formatMoney(row.adjustedOutstandingBalance)}
                </p>
                <p className={styles.row}>
                  {formatMoney(row.installmentAmount)}
                </p>
                <p className={styles.row}>{formatDate(row.dueDate)}</p>
              </div>
              <hr className={styles.divider} />
            </React.Fragment>
          ))}
          <p className={styles.lastRow}>R$0</p>
          <hr className={styles.divider} />
        </div>
        {message && (
          <div className={styles.popup}>
            <Handshake /> Empréstimo efetivado com sucesso!
          </div>
        )}

        <Button onClick={handleLoan} className={styles.button}>
          EFETIVAR O EMPRÉSTIMO
        </Button>
      </div>
    </>
  );
}

import { ReactNode } from "react";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";

import styles from "./SimulationForm.module.scss";

export function SimulationForm(): ReactNode {
  return (
    <div className={styles.simulationForm}>
      <div className={styles.inputGroup}>
        <Input placeholder="CPF" />
        <Input placeholder="UF" />
        <Input placeholder="DATA" />
        <Input placeholder="QUAL O VALOR DO EMPRÉSTIMO" />
        <Input placeholder="QUAL VALOR DESEJA PAGAR POR MÊS" />
      </div>
      <div className={styles.button}>
        <Button>SIMULAR</Button>
      </div>
    </div>
  );
}

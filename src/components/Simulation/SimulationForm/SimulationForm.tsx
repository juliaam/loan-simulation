import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";

import styles from "./SimulationForm.module.scss";
import { simulationFormSchema } from "./SimulationForm.schema";

export type ISimulationFormSchema = z.infer<typeof simulationFormSchema>;

interface SimulationFormProps {
  onSubmitForm: SubmitHandler<ISimulationFormSchema>;
}

export function SimulationForm({
  onSubmitForm,
}: SimulationFormProps): ReactNode {
  const { register, handleSubmit } = useForm<ISimulationFormSchema>({
    resolver: zodResolver(simulationFormSchema),
  });
  return (
    <div className={styles.simulationForm}>
      <form onSubmit={handleSubmit(onSubmitForm)} className={styles.inputGroup}>
        <Input placeholder="CPF" {...register("cpf")} />
        <Input placeholder="UF" {...register("uf")} />
        <Input placeholder="DATA" {...register("date")} />
        <Input
          type="number"
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
          {...register("total_value", { valueAsNumber: true })}
        />
        <Input
          type="number"
          placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
          {...register("month_value", { valueAsNumber: true })}
        />
        <Button type="submit" className={styles.button}>
          SIMULAR
        </Button>
      </form>
    </div>
  );
}

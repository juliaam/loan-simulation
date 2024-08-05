import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";

import styles from "./SimulationForm.module.scss";

const simulationFormSchema = z.object({
  cpf: z.string(),
  uf: z.string(),
  date: z.string(),
  total_value: z.number(),
  month_value: z.number(),
});

type ISimulationFormSchema = z.infer<typeof simulationFormSchema>;

export function SimulationForm(): ReactNode {
  const { register, handleSubmit } = useForm<ISimulationFormSchema>({
    resolver: zodResolver(simulationFormSchema),
  });

  function handleSimulationForm(data: ISimulationFormSchema) {
    console.log(data);
  }

  return (
    <div className={styles.simulationForm}>
      <form
        onSubmit={handleSubmit(handleSimulationForm)}
        className={styles.inputGroup}
      >
        <Input placeholder="CPF" {...register("cpf")} />
        <Input placeholder="UF" {...register("uf")} />
        <Input placeholder="DATA" {...register("date")} />
        <Input
          type="number"
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
          {...register("total_value")}
        />
        <Input
          type="number"
          placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
          {...register("month_value")}
        />
        <Button className={styles.button}>SIMULAR</Button>
      </form>
    </div>
  );
}

import { z } from "zod";

export const simulationFormSchema = z.object({
  cpf: z.string().min(11, "CPF deve ter no mínimo 11 caracteres"),
  uf: z.string().length(2),
  birth: z.string(),
  total_value: z.number().min(0, "O valor deve ser maior que 0"),
  month_value: z.number().min(0, "O valor deve ser maior que 0"),
});

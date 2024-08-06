import { z } from "zod";

export const simulationFormSchema = z.object({
  cpf: z.string().transform((value) => value.replace(/\D/g, "")),
  uf: z
    .string()
    .length(2)
    .transform((value) => value.toLowerCase()),
  birth: z.string(),
  total_value: z.number().positive(),
  month_value: z.number().positive(),
});

import { z } from "zod";

export const ContatoFormSchema = z.object({
	nome: z.string().min(3, "Nome deve conter pelo menos 3 caracteres").max(100),
	telefone: z.string().length(15, "Telefone deve conter 11 caractyeres").regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone deve estar no formato (xx) xxxxx-xxxx"),
})

export type ContatoFormSchemaType = z.infer<typeof ContatoFormSchema>
import { z } from 'zod'

export const cycleFormSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number()
})

export type INewCycleFormData = z.infer<typeof cycleFormSchema>
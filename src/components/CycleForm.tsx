import { ReactNode } from "react";
import { MinutesInput, TaskInput } from "@/components/Inputs";

export default function NewCycleForm() {
  return (
    <div className="flex w-full items-center justify-center gap-2 text-wrap text-lg font-bold">
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

      <p>durante</p>

      <MinutesInput />

      <p>minutos.</p>
    </div>
  );
}

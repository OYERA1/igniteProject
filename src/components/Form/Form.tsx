"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PlayButton, StopButton } from "./Button";
import Countdown from "./Countdown";
import { MinutesInput, TaskInput } from "@/src/components/Form/Inputs";
import { INewCycleFormData, cycleFormSchema } from "@/src/@resolver/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";

interface ICycle {
	id: string;
	task: string;
	minutesAmount: number;
	start_at: Date;
	interruptedDate?: Date;
	finishedDate?: Date;
}

export default function Form() {
	const [cycles, setCycles] = useState<ICycle[]>([]);
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
	const [amountSecodsPassed, setAmountSecodsPassed] = useState(0);

	const { register, handleSubmit, watch, setValue, getValues, reset } =
		useForm<INewCycleFormData>({
			resolver: zodResolver(cycleFormSchema),
		});

	const handleOnSubmit = (data: INewCycleFormData) => {
		const id = crypto.randomUUID();
		const newCycle: ICycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount,
			start_at: new Date(),
		};
		setCycles((state) => [...state, newCycle]);
		setActiveCycleId(id);
		setAmountSecodsPassed(0);
		reset();
	};

	const handleInterruptCycle = () => {
		setCycles((state) =>
			state.map((cycle) => {
				if (cycle.id === activeCycleId) {
					return { ...cycle, interruptedDate: new Date() };
				}
				return cycle;
			}),
		);
		setActiveCycleId(null);
	};

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (activeCycle) {
			interval = setInterval(() => {
				const secondsDifference = differenceInSeconds(
					new Date(),
					activeCycle.start_at,
				);

				if (secondsDifference >= totalSeconds) {
					setCycles((state) =>
						state.map((cycle) => {
							if (cycle.id === activeCycleId) {
								return { ...cycle, finishedDate: new Date() };
							}
							return cycle;
						}),
					);
					clearInterval(interval);
				} else {
					setAmountSecodsPassed(secondsDifference);
				}
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [activeCycle, totalSeconds, activeCycleId]);

	const currentSeconds = activeCycle ? totalSeconds - amountSecodsPassed : 0;
	const minutesAmount = Math.floor(currentSeconds / 60);
	const secondsAmount = currentSeconds % 60;

	const minutes = String(minutesAmount).padStart(2, "0");
	const seconds = String(secondsAmount).padStart(2, "0");

	useEffect(() => {
		if (activeCycle) {
			document.title = `${minutes}:${seconds}`;
		}
	}, [minutes, seconds, activeCycle]);

	// Habilita o botão se caso o "task" conter mais de um caractere
	const task = watch("task");
	const isSubmitDisabled = !task && !activeCycle;

	return (
		<form
			className="flex h-full max-h-[400px] max-w-[640px] flex-col justify-between"
			onSubmit={handleSubmit(handleOnSubmit)}
		>
			<header className="flex items-center gap-2 whitespace-nowrap text-center text-lg font-bold text-base-title">
				<label htmlFor="task">Vou trabalhar em</label>
				<TaskInput id="task" register={register} disabled={!!activeCycle} />
				<label htmlFor="minutes">durante</label>
				<MinutesInput
					disabled={!!activeCycle}
					id={"minutes"}
					register={register}
					getValues={getValues}
					setValue={setValue}
				/>
				<p>minutos.</p>
			</header>
			<Countdown minutes={minutes} seconds={seconds} />

			{activeCycle && (
				<StopButton disabled={isSubmitDisabled} onClick={handleInterruptCycle}>
					Interromper
				</StopButton>
			)}

			{!activeCycle && (
				<PlayButton disabled={isSubmitDisabled}>Começar</PlayButton>
			)}
		</form>
	);
}

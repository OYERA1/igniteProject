import { IMinutes, ITask } from "@/src/@types/interface";
import { Minus, Plus } from "@phosphor-icons/react";

function TaskInput({ register, ...rest }: ITask) {
	return (
		<input
			{...register("task")}
			type="text"
			placeholder="Dê um nome para o seu projeto"
			autoCorrect="on"
			className="
      h-10 w-[272px] border-b-2
      border-base-label bg-transparent px-2
      font-bold text-base-text
      caret-product-green duration-100 ease-in-out
       placeholder:text-center disabled:cursor-not-allowed
      placeholder:text-lg focus:border-b-product-green focus:outline-0
      "
			{...rest}
		/>
	);
}

function MinutesInput({
	register,
	setValue,
	getValues,
	disabled,
	...rest
}: IMinutes) {
	const add = () => {
		const currentValue = getValues("minutesAmount") | 0;
		if (currentValue < 60) setValue("minutesAmount", currentValue + 5);
	};
	const minus = () => {
		const currentValue = getValues("minutesAmount") | 0;
		if (currentValue > 0) setValue("minutesAmount", currentValue - 5);
	};

	return (
		<div
			className="flex h-10 w-full max-w-[73px] justify-center gap-2
      border-b-2
      border-base-placeholder  focus-within:border-product-green
      "
		>
			<button type="button" onClick={minus} disabled={disabled}>
				<Minus size={16} />
			</button>
			<input
				type="number"
				placeholder={"00"}
				max={60}
				disabled={disabled}
				min={5}
				{...register("minutesAmount", { valueAsNumber: true })}
				{...rest}
				className="w-5 bg-transparent text-center focus:outline-0
        disabled:cursor-not-allowed disabled:text-base-placeholder"
			/>
			<button type="button" onClick={add} disabled={disabled}>
				<Plus size={16} />
			</button>
		</div>
	);
}

export { TaskInput, MinutesInput };

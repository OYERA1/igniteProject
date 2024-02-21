export default function FormHeader() {
	return (
		<div className="flex items-center gap-2 text-lg ">
			<p>Vou trabalhar em</p>

			<input
				placeholder="Dê um nome para o seu projeto"
				className="flex flex-wrap w-[270px] input placeholder:text-center"
				autoComplete="off"
				type="text"
			/>

			<p>durante</p>

			<input
				min={1}
				max={60}
				type="number"
				placeholder="00"
				className="input "
			/>

			<p>minutos.</p>
		</div>
	);
}

import TableItems from "./TableItems";

export interface CycleProps {
	id: number;
	content: string;
	time: number;
	status: string;
}

export default function Table() {
	const cycle = [
		{
			id: 1,
			content: "aqui é o conteudo do teste 1",
			time: 10,
			status: "Sucess",
		},
		{
			id: 2,
			content: "aqui é o conteudo do teste 2",
			time: 20,
			status: "Interrompido",
		},
		{
			id: 3,
			content: "aqui é o conteudo do teste 3",
			time: 5,
			status: "Em andamento",
		},
	];
	return (
		<div>
			<div className="bg-primary p-2 w-full rounded-t-xl">
				<ul className="flex py-4 px-6 gap-14">
					<li className="max-w-56">Tarefas</li>
					<div className="flex gap-5 justify-around">
						<li>Duração</li>
						<li>Início</li>
						<li>Status</li>
					</div>
				</ul>
				<TableItems cycle={cycle} />
			</div>
		</div>
	);
}

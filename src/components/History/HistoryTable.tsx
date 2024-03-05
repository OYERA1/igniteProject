import Th from "./tableComponents/th";
import Td from "./tableComponents/td";
import Status from "./tableComponents/status";
export interface CycleProps {
	id: number;
	content: string;
	time: number;
	status: string;
}

export default function HistoryTable() {
	return (
		<div className="flex-1 overflow-auto ">
			<table className="w-full min-w-[600px] border-collapse">
				<thead className="">
					<tr className="">
						<Th>Tarefa</Th>
						<Th>Duração</Th>
						<Th>Início</Th>
						<Th>Status</Th>
					</tr>
				</thead>
				<tbody className="">
					<tr>
						<Td>Tarefa</Td>
						<Td>20 minutos</Td>
						<Td>Há 2 meses</Td>
						<Td>
							<Status statusColor="red">Concluido</Status>
						</Td>
					</tr>
					<tr>
						<Td>Tarefa</Td>
						<Td>20 minutos</Td>
						<Td>Há 2 meses</Td>
						<Td>
							<Status statusColor="yellow">Concluido</Status>
						</Td>
					</tr>
					<tr>
						<Td>Tarefa</Td>
						<Td>20 minutos</Td>
						<Td>Há 2 meses</Td>
						<Td>
							<Status statusColor="red">Concluido</Status>
						</Td>
					</tr>
					<tr>
						<Td>Tarefa</Td>
						<Td>20 minutos</Td>
						<Td>Há 2 meses</Td>
						<Td>concluido</Td>
					</tr>
					<tr>
						<Td>Tarefa</Td>
						<Td>20 minutos</Td>
						<Td>Há 2 meses</Td>
						<Td>concluido</Td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

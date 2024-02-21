import { useState } from "react";
import { CycleProps } from "./TableHistory";

interface CycleArr {
	cycle: CycleProps[];
}

export default function TableItems({ cycle }: CycleArr) {
	const colors = (i: string) => {
		switch (i) {
			case "Sucess":
				return "text-green-600";
			case "Interrompido":
				return "text-red-600";
			case "Em andamento":
				return "text-yellow-600";
		}
	};
	return (
		<ul className="flex flex-col gap-2 ">
			{cycle.map((item) => {
				return (
					<li
						key={item.id}
						className="bg-[#29292E] flex px-6 py-3 rounded justify-between"
					>
						<p
							className="max-w-56 min-w-max 
                        "
						>
							{item.content}
						</p>

						<div className="flex gap-5 ">
							<div className="w-20 flex gap-1 justify-end">
								<p>{item.time}</p>
								<p>Minutos</p>
							</div>
							<p>Há cerca de 2 meses</p>
							<div className="flex items-center w-32 gap-[2px] ">
								<p
									className={`text-4xl leading-[0px] ${colors(item.status)}
                                `}
								>
									•
								</p>
								<p>{item.status}</p>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

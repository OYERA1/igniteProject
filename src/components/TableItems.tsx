import { CycleProps } from "@/components/TableHistory";

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
      default:
        return "text-green-600";
    }
  };
  return (
    <ul className="flex flex-col gap-2 ">
      {cycle.map((item) => (
        <li key={item.id} className="flex justify-between rounded px-6 py-3">
          <p className="min-w-max max-w-56">{item.content}</p>

          <div className="flex gap-5 ">
            <div className="flex w-20 justify-end gap-1">
              <p>{item.time}</p>
              <p>Minutos</p>
            </div>
            <p>Há cerca de 2 meses</p>
            <div className="flex w-32 items-center gap-[2px] ">
              <p className={`text-4xl leading-[0px] ${colors(item.status)}`}>
                •
              </p>
              <p>{item.status}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

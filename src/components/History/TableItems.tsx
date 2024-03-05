import { CycleProps } from "@/src/components/History/HistoryTable";

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
    <ul>
      {cycle.map((item) => (
        <li key={item.id}>
          <p>{item.content}</p>

          <div>
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

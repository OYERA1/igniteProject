export default function HistoryComponent() {
    return (
        <div className="mt-12 w-full p-4 flex flex-col justify-center ">
            <h1>Meu historico</h1>
            <div className="bg-primary p-2 w-full rounded-xl">
                <ul className="flex py-4 px-6 gap-14">
                    <li className="mr-48">Tarefas</li>
                    <div className="flex gap-5 justify-around">
                        <li>Duração</li>
                        <li>Início</li>
                        <li>Status</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

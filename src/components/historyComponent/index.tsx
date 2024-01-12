import Table from './TableHistory'

export default function HistoryComponent() {
    return (
        <div className="mt-10 w-full p-4 flex flex-col gap-5">
            <h1 className='capitalize font-bold text-3xl'>history</h1>
            <Table />
        </div>
    )
}

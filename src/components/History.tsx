import Table from "@/components/TableHistory";

export default function HistoryComponent() {
  return (
    <div className="mt-10 flex w-full flex-col gap-5 p-4">
      <h1 className="text-3xl font-bold capitalize">history</h1>
      <Table />
    </div>
  );
}

import HistoryHeader from "@/components/History/HistoryHeader";
import HistoryMain from "@/src/components/History/HistoryMain";
import HistoryTable from "@/src/components/History/HistoryTable";
export default function HistoryPage() {
  return (
    <HistoryMain>
      <HistoryHeader />
      <HistoryTable />
    </HistoryMain>
  );
}

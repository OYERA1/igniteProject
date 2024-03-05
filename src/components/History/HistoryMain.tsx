export default function HistoryMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-full flex-col gap-8 px-14 py-[50px]">
      {children}
    </main>
  );
}

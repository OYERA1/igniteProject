export default function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex h-max w-max flex-col items-center gap-14">
      {children}
    </form>
  );
}

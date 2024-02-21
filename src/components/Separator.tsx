export default function Separator({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-base-divider px-4 py-10 ">
      <p className="font-roboto-mono text-[10rem] font-bold leading-[11.375rem] text-base-title">
        {children}
      </p>
    </div>
  );
}

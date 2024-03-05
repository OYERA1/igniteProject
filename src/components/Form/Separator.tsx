export default function Separator({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-32 max-h-[198px] items-center justify-center rounded-lg bg-base-divider px-4 py-10 ">
      <p className=" w-24 font-roboto-mono  text-[10rem] font-bold leading-[120px] text-base-title">
        {children}
      </p>
    </div>
  );
}

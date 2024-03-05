export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen items-center justify-center bg-base-background px-8 py-20">
      {children}
    </div>
  );
}

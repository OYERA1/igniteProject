export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen items-center justify-center bg-base-background px-40 py-20">
      {children}
    </main>
  );
}

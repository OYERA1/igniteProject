import Header from "@/src/components/Header";
import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-[74rem]  flex-col rounded-lg bg-base-elements p-10">
      {children}
    </div>
  );
}

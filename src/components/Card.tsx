import Header from "@/components/Header";
import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto my-20 flex h-[calc(100vh-10rem)] w-[74rem] flex-col rounded-lg bg-base-elements py-10">
      {children}
    </div>
  );
}

"use client";

import { useState } from "react";
import Separator from "@/components/Separator";

export default function Countdown() {
  const [seconds, setSeconds] = useState([0, 0]);
  const [minutes, setMinutes] = useState([0, 0]);

  return (
    <div className="mt-14 flex items-center gap-4">
      <Separator>{minutes[0]}</Separator>
      <Separator>{minutes[1]}</Separator>
      <span className="flex h-full text-[10rem] font-bold text-product-green">
        :
      </span>
      <Separator>{seconds[0]}</Separator>
      <Separator>{seconds[1]}</Separator>
    </div>
  );
}

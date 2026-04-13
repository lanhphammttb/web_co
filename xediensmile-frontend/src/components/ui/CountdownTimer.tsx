"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownTimer() {
  // End of month target
  const [target] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  });
  const [time, setTime] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1.5">
      {[
        { val: pad(time.d), label: "Ngày" },
        { val: pad(time.h), label: "Giờ" },
        { val: pad(time.m), label: "Phút" },
        { val: pad(time.s), label: "Giây" },
      ].map(({ val, label }, i) => (
        <span key={label} className="flex items-center gap-1.5">
          <span className="flex flex-col items-center">
            <span className="bg-[#e83e3e] text-white font-black text-sm px-2 py-0.5 rounded min-w-[28px] text-center tabular-nums">
              {val}
            </span>
            <span className="text-[9px] text-gray-500 mt-0.5">{label}</span>
          </span>
          {i < 3 && <span className="text-[#e83e3e] font-black text-base -mt-3">:</span>}
        </span>
      ))}
    </div>
  );
}

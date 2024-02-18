import React from "react";

export default function Header() {
  return (
    <div className="mb-6 flex w-full items-center justify-between">
      <h1 className="text-lg font-bold">방송중인 채널</h1>
      <ul className="flex gap-4 text-sm font-bold text-neutral-400">
        <li>ALL</li>
        <li>SOOP</li>
        <li>YOUTUBE</li>
        <li className="text-supafast-primary">CHZZK</li>
      </ul>
    </div>
  );
}

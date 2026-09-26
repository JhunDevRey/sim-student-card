"use client";

import { useState } from "react";

type StudentCardProps = {
  name: string;
  course: string;
  year: string;
};

export default function StudentCard({ name, course, year }: StudentCardProps) {
  const [message, setMessage] = useState("Hello, Student!");
  const [greeted, setGreeted] = useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function handleClick() {
    setGreeted(!greeted);
    setMessage(greeted ? "Hello, Student!" : "Welcome to Next.js!");
  }

  return (
    <div className="group relative w-full max-w-sm">
      {/* Glow behind the card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-xl transition duration-500 group-hover:opacity-90" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-white shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Student Card
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Active
          </span>
        </div>

        {/* Avatar + name */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 text-2xl font-bold shadow-lg shadow-purple-500/30">
            {initials}
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight">{name}</h2>

          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">
              {course}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">
              {year}
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="mt-8 rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
          <p
            key={message}
            className="animate-[fadeIn_0.4s_ease-out] text-lg font-medium text-slate-100"
          >
            {message}
          </p>
        </div>

        {/* Action */}
        <button
          onClick={handleClick}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          {greeted ? "Reset" : "Click Me"}
        </button>
      </div>
    </div>
  );
}

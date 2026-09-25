"use client";

import { useEffect, useId, useState } from "react";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#studio", label: "Studio" },
  { href: "#ai", label: "AI Coach" },
  { href: "#smart-comp", label: "Smart Comp" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[#07091a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span className="text-lg font-semibold tracking-tight text-white">Wav-Aid</span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium whitespace-nowrap text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#get-started"
            className="hidden h-12 items-center justify-center rounded-full bg-violet-500 px-5 text-base font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.45)] transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200 lg:inline-flex"
          >
            Get Wav-Aid
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      </div>
    </header>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-[60] overflow-y-auto bg-[#07091a] px-5 pt-6 pb-10 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center rounded-2xl px-4 text-lg font-medium text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-14 w-full items-center justify-center rounded-full bg-violet-500 text-base font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
          >
            Get Wav-Aid
          </a>
        </nav>
      ) : null}
    </>
  );
}

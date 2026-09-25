import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#workflow", label: "Workflow" },
      { href: "#studio", label: "Studio" },
    ],
  },
  {
    title: "Session",
    links: [
      { href: "#ai", label: "AI Coach" },
      { href: "#smart-comp", label: "Smart Comp" },
      { href: "#get-started", label: "Get Wav-Aid" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070910]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div
          id="get-started"
          className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14"
        >
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">For artists and musicians</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Bring the session to your phone.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            Record in lanes, keep every take, and let Wav-Aid tell you what to sing next.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#studio"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-500 px-7 text-base font-semibold text-white shadow-[0_0_36px_rgba(139,92,246,0.45)] transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200 sm:w-auto"
            >
              See it on iPhone
            </a>
            <a
              href="#workflow"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:w-auto"
            >
              Follow the workflow
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Image
              src="/images/logo/wav-aid-logo.png"
              alt="Wav-Aid"
              width={160}
              height={160}
              className="h-32 w-32 object-contain sm:h-36 sm:w-36"
            />
            <p className="mt-4 max-w-sm text-base leading-7 text-white/70">
              Small improvements every day lead to big results.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[13px] tracking-[0.18em] text-violet-200 uppercase">{column.title}</p>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-12 items-center text-base text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-base text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wav-Aid</p>
          <p>Designed for iPhone</p>
        </div>
      </div>
    </footer>
  );
}

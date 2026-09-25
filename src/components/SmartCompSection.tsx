import { PhoneMockup } from "./PhoneMockup";

const reasons = [
  "Strongest pitch stability",
  "Best timing consistency",
  "Highest vocal energy",
];

export function SmartCompSection() {
  return (
    <section id="smart-comp" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-28" aria-labelledby="comp-heading">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:max-w-[90rem] lg:grid-cols-[minmax(340px,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-10">
        <div className="order-2 mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:order-1 lg:max-w-[440px]">
          <PhoneMockup
            src="/images/screens/smart-comp-screen.png"
            alt="Smart Comp suggesting Phrase 1 from Take 2 with a score of 92"
            glow
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">Smart Comp</p>
          <h2 id="comp-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The best phrases, still yours to approve.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Wav-Aid drafts a performance from the lines that already worked. Preview the comp, accept it, or swap any section by hand.
          </p>

          <div className="mt-8 rounded-3xl border border-violet-400/25 bg-[#120c22]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <p className="text-base text-white/80">Suggested performance</p>
              <p className="text-3xl font-semibold tracking-tight text-violet-200">95%</p>
            </div>
            <p className="mt-1 font-mono text-[13px] tracking-[0.16em] text-violet-200/80 uppercase">Confidence</p>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3 text-base text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-violet-100 ring-1 ring-violet-300/40">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4.2 4.2L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

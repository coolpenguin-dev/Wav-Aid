import { PhoneMockup } from "./PhoneMockup";

const waveform = [10, 16, 24, 18, 32, 28, 42, 30, 18, 36, 46, 26, 16, 34, 22, 12, 30, 40, 24, 14, 28, 18, 11, 22, 16];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-10 lg:px-10 lg:pt-16 lg:pb-24 xl:gap-16">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/85">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70 motion-reduce:animate-none" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            Vocal session · 96 BPM · A Minor
          </p>

          <h1 className="mt-6 text-balance text-[2.45rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
            A studio session for your voice.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
            Wav-Aid is an iPhone vocal studio with timeline lanes, progressive recording, and an AI
            producer that scores every take.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#workflow"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-500 px-7 text-base font-semibold text-white shadow-[0_0_36px_rgba(139,92,246,0.5)] transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200 sm:w-auto"
            >
              Start a session
            </a>
            <a
              href="#studio"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:w-auto"
            >
              Explore the studio
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["96", "BPM"],
              ["A Minor", "Key"],
              ["5", "Takes"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
              >
                <dd className="text-lg font-semibold tracking-tight text-white">{value}</dd>
                <dt className="mt-1 font-mono text-[13px] tracking-[0.16em] text-violet-200/80 uppercase">
                  {label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-8 hidden h-14 items-end gap-[3px] lg:flex" aria-hidden="true">
            {waveform.map((height, index) => (
              <span
                key={index}
                className={`w-1.5 rounded-full ${index === 14 ? "bg-red-400" : "bg-violet-300/80"}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px]">
          <div className="float-soft">
            <PhoneMockup
              src="/images/hero/singer-hero-female.png"
              alt="Wav-Aid welcome screen with a singer at a studio microphone"
              priority
              glow
            />
          </div>

          <div className="absolute top-[34%] left-0 hidden w-44 -translate-x-[68%] rounded-2xl border border-white/15 bg-[#12101c]/85 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:block">
            <p className="font-mono text-[13px] tracking-[0.16em] text-violet-200 uppercase">AI monitoring</p>
            <p className="mt-2 text-base font-semibold text-white">Pitch stable</p>
            <p className="mt-1 text-sm text-white/70">Timing locked · Energy strong</p>
          </div>

          <div className="absolute right-0 bottom-[14%] hidden w-40 translate-x-[46%] rounded-2xl border border-white/15 bg-[#12101c]/85 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:block">
            <p className="font-mono text-[13px] tracking-[0.16em] text-red-300 uppercase">Rec 00:14</p>
            <p className="mt-2 text-base font-semibold text-white">Take 6</p>
            <p className="mt-1 text-sm text-white/70">Punch-in on the chorus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

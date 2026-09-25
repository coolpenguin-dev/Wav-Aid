import Image from "next/image";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-10 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(260px,0.78fr)_minmax(320px,0.95fr)] lg:gap-x-16 lg:px-10 lg:pt-14 lg:pb-20 xl:gap-x-20">
        <div className="relative z-10 min-w-0 max-w-xl lg:max-w-none lg:pr-6">
          <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70 motion-reduce:animate-none" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            Take 6 · Main vocal
          </p>

          <h1 className="mt-6 text-balance text-[2.45rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
            Keep every take. Sing the next one better.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
            Stack each pass on the session timeline. Wav-Aid listens for pitch, timing, and energy, then tells you how to sing the line again.
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
              Open the timeline
            </a>
          </div>

          <p className="mt-8 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-mono text-sm tracking-[0.12em] text-white/80 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            <span>96 BPM</span>
            <span className="text-violet-300/80" aria-hidden="true">
              ·
            </span>
            <span>A Minor</span>
            <span className="text-violet-300/80" aria-hidden="true">
              ·
            </span>
            <span>5 takes</span>
          </p>
        </div>

        <figure className="relative hidden h-[min(72vh,680px)] overflow-hidden lg:block" aria-hidden="true">
          <Image
            src="/images/hero/singer-female-1.png"
            alt=""
            fill
            priority
            sizes="28vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#05060d_0%,#05060d_10%,transparent_34%,transparent_72%,#05060d_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#05060d_0%,transparent_14%,transparent_86%,#05060d_100%)]" />
        </figure>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[300px] sm:max-w-[340px] lg:mx-0 lg:max-w-[400px] xl:max-w-[440px]">
          <PhoneMockup
            src="/images/hero/singer-hero-female.png"
            alt="Singer in a dark studio booth on the Wav-Aid welcome screen"
            priority
            glow
          />
        </div>
      </div>
    </section>
  );
}

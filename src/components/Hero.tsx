import Image from "next/image";
import { RecDot, Reveal } from "./motion";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-12 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,0.84fr)_minmax(480px,1.16fr)] lg:gap-8 lg:px-10 lg:pt-16 lg:pb-24 xl:gap-14">
        <div className="relative z-10 min-w-0 max-w-xl lg:max-w-[36rem]">
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
              <RecDot />
              Take 6 · Main vocal
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-[2.45rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
              Keep every take. Sing the next one better.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Stack each pass on the session timeline. Wav-Aid listens for pitch, timing, and energy, then tells you how to sing the line again.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
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
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-[17rem] sm:max-w-lg sm:pb-[19rem] lg:mx-0 lg:max-w-none lg:pb-0">
          <Reveal delay={0.1} className="relative">
            <figure
              className="relative h-[32rem] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:h-[36rem] lg:h-[min(86vh,48rem)]"
              aria-hidden="true"
            >
              <Image
                src="/images/hero/singer-female-1.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[center_8%] lg:object-[center_14%]"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#05060d]/80 to-transparent lg:w-16" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05060d]/70 to-transparent" />
            </figure>
          </Reveal>

          <div className="absolute top-[42%] left-1/2 z-10 w-[13.5rem] -translate-x-1/2 sm:w-[15rem] lg:top-auto lg:right-[7%] lg:bottom-[4%] lg:left-auto lg:w-[15.5rem] lg:translate-x-0 xl:w-[17.5rem]">
            <PhoneMockup
              src="/images/hero/singer-hero-female.png"
              alt="Wav-Aid on iPhone, open in a vocal session"
              priority
              glow
              drift
              sizes="(max-width: 1024px) 240px, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./motion";

const steps = [
  {
    title: "Session",
    body: "Open the song with its tempo, key, and the takes you already kept.",
  },
  {
    title: "Timeline studio",
    body: "See the beat, vocal lanes, and section markers before you sing.",
  },
  {
    title: "Progressive recording",
    body: "Punch in over the track instead of starting the whole song again.",
  },
  {
    title: "Multiple takes",
    body: "Stack every pass on the lane and keep the score beside the waveform.",
  },
  {
    title: "Take comparison",
    body: "Read pitch, timing, projection, and recording quality side by side.",
  },
  {
    title: "AI feedback",
    body: "Get a producer note on what held and what to sing again.",
  },
  {
    title: "Improve",
    body: "Record the next pass with a clear target, then comp the best phrases.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] py-16 sm:py-20 lg:py-28"
      aria-labelledby="workflow-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">Workflow</p>
          <h2 id="workflow-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            From the session to a better performance.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            The same path every time you record: lay down the lane, compare the passes, then let the coach point at the next punch-in.
          </p>
        </Reveal>

        <ol className="relative mt-10 space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-12 lg:gap-5">
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[1.35rem] w-px bg-gradient-to-b from-violet-400 via-violet-500/30 to-transparent md:hidden"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={index < 4 ? "lg:col-span-3" : "lg:col-span-4"}
            >
              <Reveal delay={index * 0.05} className="h-full">
              <article className="relative flex h-full gap-4 rounded-3xl border border-white/10 bg-[#0c1020]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-6 md:flex-col">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/20 font-mono text-base text-violet-100 ring-1 ring-violet-400/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight md:mt-4">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-white/72">{step.body}</p>
                </div>
              </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

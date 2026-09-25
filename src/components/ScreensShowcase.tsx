import { Reveal } from "./motion";
import { PhoneMockup } from "./PhoneMockup";

const sessionScreens = [
  {
    src: "/images/screens/home-screen.png",
    title: "Home",
    caption: "Come back to Midnight Demo with the key, tempo, and take count already on the card.",
    alt: "Wav-Aid home screen with recent sessions Midnight Demo and Warmup Pass",
  },
  {
    src: "/images/screens/recording-screen.png",
    title: "Record",
    caption: "Punch in on the chorus while pitch, timing, and energy stay in view.",
    alt: "Recording screen with Take 6 in red and AI monitoring for pitch, timing, and energy",
  },
  {
    src: "/images/screens/take-analysis-screen.png",
    title: "Analysis",
    caption: "A score for the pass you just sang, and what changed from the one before it.",
    alt: "Take 6 analysis with a performance score of 84 and an AI summary",
  },
];

const laneNotes = [
  { label: "Beat", detail: "The arrangement stays locked under the vocal." },
  { label: "Main vocal", detail: "Five takes, each with a score beside the waveform." },
  { label: "Playhead", detail: "Verse into pre-chorus, ready for the next punch-in." },
];

export function ScreensShowcase() {
  return (
    <section id="studio" className="scroll-mt-24 py-16 sm:py-20 lg:py-28" aria-labelledby="studio-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:max-w-[90rem] lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">Timeline</p>
          <h2 id="studio-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Every pass stays where you sang it.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            A vocal lane with the takes still on it. Scores sit next to the waveforms, and the playhead shows the section you are about to record again.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px]">
            <PhoneMockup
              src="/images/screens/timeline-screen.png"
              alt="Timeline studio for Midnight Demo with beat and main vocal takes"
              glow
            />
          </div>
          <ul className="space-y-4">
            {laneNotes.map((note, index) => (
              <li key={note.label}>
              <Reveal delay={index * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-6">
                <p className="font-mono text-[13px] tracking-[0.16em] text-violet-200 uppercase">{note.label}</p>
                <p className="mt-2 text-lg leading-7 text-white">{note.detail}</p>
              </div>
              </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:mt-20 sm:px-8 lg:max-w-[90rem] lg:px-10">
        <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">In the same session</p>
        <p className="mt-3 max-w-xl text-lg leading-8 text-white/75 lg:hidden">Swipe the takes.</p>
      </div>

      <ul
        className="snap-row mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8vw] pb-2 lg:mx-auto lg:mt-8 lg:grid lg:w-full lg:max-w-[90rem] lg:grid-cols-3 lg:justify-items-center lg:gap-10 lg:overflow-visible lg:px-10 lg:pb-0"
        tabIndex={0}
        role="region"
        aria-label="Home, recording, and take analysis screens"
      >
        {sessionScreens.map((screen) => (
          <li
            key={screen.src}
            className="w-[min(84vw,340px)] shrink-0 snap-center lg:w-full lg:max-w-[380px] lg:snap-align-none"
          >
            <figure>
              <PhoneMockup src={screen.src} alt={screen.alt} />
              <figcaption className="px-1 pt-5 lg:pt-6">
                <p className="text-lg font-semibold lg:text-xl">{screen.title}</p>
                <p className="mt-1 text-base leading-7 text-white/70 lg:mt-2">{screen.caption}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

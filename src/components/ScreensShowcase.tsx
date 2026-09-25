import { PhoneMockup } from "./PhoneMockup";

const screens = [
  {
    src: "/images/screens/home-screen.png",
    title: "Home",
    caption: "Sessions, keys, and a record button that starts the take.",
    alt: "Wav-Aid home screen with recent sessions Midnight Demo and Warmup Pass",
  },
  {
    src: "/images/screens/timeline-screen.png",
    title: "Timeline",
    caption: "Stacked vocal lanes under the beat, with a moving playhead.",
    alt: "Timeline studio for Midnight Demo with beat and main vocal takes",
  },
  {
    src: "/images/screens/recording-screen.png",
    title: "Record",
    caption: "Punch in while pitch, timing, and energy stay in view.",
    alt: "Recording screen with Take 6 in red and AI monitoring for pitch, timing, and energy",
  },
  {
    src: "/images/screens/take-analysis-screen.png",
    title: "Analysis",
    caption: "A performance score and a short note on what changed.",
    alt: "Take 6 analysis with a performance score of 84 and an AI summary",
  },
  {
    src: "/images/screens/ai-coach-screen.png",
    title: "AI Coach",
    caption: "A producer in the session, ready for the next question.",
    alt: "Wav-Aid Coach chat about the last vocal take inside Midnight Demo",
  },
  {
    src: "/images/screens/smart-comp-screen.png",
    title: "Smart Comp",
    caption: "The strongest phrases, scored and ready to preview.",
    alt: "Smart Comp screen building a best take for the pre-chorus",
  },
];

export function ScreensShowcase() {
  return (
    <section id="studio" className="scroll-mt-24 py-16 sm:py-20 lg:py-28" aria-labelledby="studio-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">On iPhone</p>
          <h2 id="studio-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            A timeline you can hold.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Home, lanes, recording, scores, coaching, and comp. The full session lives on the phone, not in a stripped-down recorder.
          </p>
          <p className="mt-4 text-base text-violet-200 lg:hidden">Swipe through the session.</p>
        </div>
      </div>

      <ul
        className="snap-row mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[11vw] pb-2 lg:mx-auto lg:mt-14 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:justify-items-center lg:gap-x-8 lg:gap-y-14 lg:overflow-visible lg:px-10 lg:pb-0"
        tabIndex={0}
        role="region"
        aria-label="Wav-Aid app screens"
      >
        {screens.map((screen) => (
          <li
            key={screen.src}
            className="w-[min(78vw,280px)] shrink-0 snap-center lg:w-full lg:max-w-[300px] lg:snap-align-none"
          >
            <figure>
              <PhoneMockup src={screen.src} alt={screen.alt} className="lg:drop-shadow-[0_0_40px_rgba(139,92,246,0.18)]" />
              <figcaption className="px-1 pt-5 text-center lg:pt-6">
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

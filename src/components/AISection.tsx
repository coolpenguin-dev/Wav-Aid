import { PhoneMockup } from "./PhoneMockup";

const notes = [
  {
    label: "Focus next",
    text: "Your verse entrances are slightly behind the beat.",
  },
  {
    label: "Strongest pass",
    text: "Take 3 held the pitch and kept the projection consistent.",
  },
  {
    label: "Sing it again",
    text: "Punch in Verse 2 and chase that entrance.",
  },
];

export function AISection() {
  return (
    <section
      id="ai"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 py-16 sm:py-20 lg:py-28"
      aria-labelledby="ai-heading"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:max-w-[90rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">AI Coach</p>
          <h2 id="ai-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            A note from the booth, after the take.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Ask how the last pass felt. Wav-Aid names the strongest take and the entrance that sat behind the beat, then sends you back to record that line.
          </p>

          <ul className="mt-8 space-y-4">
            {notes.map((note) => (
              <li
                key={note.label}
                className="rounded-3xl border border-white/10 bg-[#0c1020]/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-6"
              >
                <p className="font-mono text-[13px] tracking-[0.16em] text-violet-200 uppercase">{note.label}</p>
                <p className="mt-2 text-lg leading-7 text-white">{note.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
          <PhoneMockup
            src="/images/screens/ai-coach-screen.png"
            alt="Wav-Aid Coach recommending another punch-in for Verse 2"
            glow
          />
        </div>
      </div>
    </section>
  );
}

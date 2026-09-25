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
    label: "Recommended",
    text: "Try another punch-in for Verse 2.",
  },
];

export function AISection() {
  return (
    <section
      id="ai"
      className="scroll-mt-24 border-y border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_55%)] py-16 sm:py-20 lg:py-28"
      aria-labelledby="ai-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">AI Coach</p>
          <h2 id="ai-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            A producer who stays in the session.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Wav-Aid listens to the take you just sang. It tells you what to keep, what slipped, and where to punch in — inside the same song, not in a separate chat app.
          </p>

          <ul className="mt-8 space-y-4">
            {notes.map((note) => (
              <li
                key={note.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-6"
              >
                <p className="font-mono text-[13px] tracking-[0.16em] text-violet-200 uppercase">{note.label}</p>
                <p className="mt-2 text-lg leading-7 text-white">{note.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
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

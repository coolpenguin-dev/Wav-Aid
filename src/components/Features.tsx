const features = [
  {
    step: "01",
    title: "Record",
    body: "Punch in over the beat and leave every pass on the lane. Take 6 records in red while the earlier takes stay put.",
  },
  {
    step: "02",
    title: "Analyze",
    body: "Each take is scored for pitch, timing, projection, and consistency, with a note on what moved since the last pass.",
  },
  {
    step: "03",
    title: "Improve",
    body: "The coach points at the entrance to sing again. Smart Comp then drafts the strongest phrases into one performance.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 sm:py-20 lg:py-28" aria-labelledby="features-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">The session</p>
          <h2 id="features-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Record. Analyze. Improve.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            The same three moves every time you sing: capture the pass, read what it did, then go back for the line that can be better.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title}>
              <article className="relative h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-8">
                <p className="font-mono text-sm tracking-[0.18em] text-violet-200 uppercase">
                  <span className={feature.step === "01" ? "text-red-300" : undefined}>{feature.step}</span>
                  <span className="mx-2 text-white/30">/</span>
                  {feature.title}
                </p>
                <p className="mt-5 text-lg leading-8 text-white/78">{feature.body}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

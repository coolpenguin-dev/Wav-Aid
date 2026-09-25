const features = [
  {
    title: "Session library",
    body: "Come back to a song with its BPM, key, and take count already on the card. Midnight Demo is one tap away.",
    icon: "library",
  },
  {
    title: "Timeline lanes",
    body: "Beat, main vocal, and ad-lib sit on a session ruler with verse and chorus markers, the way a vocal producer lays out a song.",
    icon: "lanes",
  },
  {
    title: "Progressive recording",
    body: "Punch in over the arrangement. The playhead keeps moving and the new pass lands on its own lane in red.",
    icon: "record",
  },
  {
    title: "Scored takes",
    body: "Every pass gets a performance score for pitch, timing, projection, consistency, and recording quality.",
    icon: "score",
  },
  {
    title: "AI vocal coach",
    body: "Ask how the last take felt. Wav-Aid names the strongest pass and the entrance that sat behind the beat.",
    icon: "coach",
  },
  {
    title: "Smart comp",
    body: "Build a suggested performance from the phrases with the best pitch, timing, and vocal energy.",
    icon: "comp",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 sm:py-20 lg:py-28" aria-labelledby="features-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.2em] text-violet-300 uppercase">The studio</p>
          <h2 id="features-heading" className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything between the first take and the best one.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            A vocal workflow with the density of a desktop session, simplified for the way singers actually record on a phone.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-violet-400/35 hover:bg-white/[0.07] sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/30">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/72">{feature.body}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (name === "library") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="4" y="13" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="13" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "lanes") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h10M4 17h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 10.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "record") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" fill="#fb7185" />
      </svg>
    );
  }

  if (name === "score") {
    return (
      <svg {...common}>
        <path d="M5 16l4-4 3 3 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "coach") {
    return (
      <svg {...common}>
        <path d="M12 4l1.4 3.6L17 9l-3.6 1.4L12 14l-1.4-3.6L7 9l3.6-1.4L12 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 16h12M8 19.5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 15c2-6 4-6 6 0s4 6 6 0 4-6 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 9c2-4 4-4 6 0s4 4 6 0 4-4 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

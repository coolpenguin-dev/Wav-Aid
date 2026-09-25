import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  glow?: boolean;
  className?: string;
};

export function PhoneMockup({
  src,
  alt,
  priority = false,
  glow = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {glow ? (
        <div
          aria-hidden="true"
          className="absolute -inset-8 -z-10 rounded-full bg-violet-600/30 blur-3xl"
        />
      ) : null}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/35 via-zinc-600/50 to-black p-px shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
        <span
          aria-hidden="true"
          className="absolute top-[18%] -left-[3px] h-8 w-[3px] rounded-l-sm bg-zinc-500"
        />
        <span
          aria-hidden="true"
          className="absolute top-[28%] -left-[3px] h-12 w-[3px] rounded-l-sm bg-zinc-500"
        />
        <span
          aria-hidden="true"
          className="absolute top-[24%] -right-[3px] h-16 w-[3px] rounded-r-sm bg-zinc-500"
        />
        <div className="rounded-[2.45rem] bg-[#07070a] p-[9px] sm:p-[10px]">
          <div className="overflow-hidden rounded-[1.95rem] bg-black ring-1 ring-white/10">
            <Image
              src={src}
              alt={alt}
              width={1170}
              height={2532}
              priority={priority}
              quality={90}
              sizes="(max-width: 1024px) 78vw, 340px"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-11 w-12" }: BrandMarkProps) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src="/images/logo/wav-aid-logo.png"
        alt=""
        width={1254}
        height={1254}
        className="absolute left-1/2 top-[-4%] h-[170%] w-auto max-w-none -translate-x-1/2"
      />
    </span>
  );
}

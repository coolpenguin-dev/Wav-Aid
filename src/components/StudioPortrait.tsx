import Image from "next/image";

type StudioPortraitProps = {
  src: string;
  className?: string;
  imageClassName?: string;
  fadeClassName: string;
  edges?: boolean;
};

export function StudioPortrait({
  src,
  className = "",
  imageClassName = "object-[center_22%]",
  fadeClassName,
  edges = true,
}: StudioPortraitProps) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0">
        <Image src={src} alt="" fill sizes="60vw" className={`object-cover ${imageClassName}`} />
      </div>
      <div className={`absolute inset-0 ${fadeClassName}`} />
      {edges ? (
        <>
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#05060d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05060d] to-transparent" />
        </>
      ) : null}
    </div>
  );
}

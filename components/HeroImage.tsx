import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export default function HeroImage({
  src,
  alt,
  caption,
  priority = false,
}: HeroImageProps) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="relative aspect-[16/8] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      </div>

      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-zinc-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
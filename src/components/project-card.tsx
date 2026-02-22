import Image from "next/image";

interface ProjectCardProps {
  title: string;
  href?: string;
  label?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  enforceAspectRatio?: boolean;
}

export function ProjectCard({
  title,
  href,
  label,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  enforceAspectRatio = true,
}: ProjectCardProps) {
  return (
    <div>
      {imageSrc ? (
        href ? (
          <a href={href} target="_blank" className="block rounded-xl overflow-hidden border border-foreground/10 mb-4">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={imageWidth ?? 1600}
              height={imageHeight ?? 900}
              className={`w-full h-auto ${enforceAspectRatio ? "aspect-video" : ""} object-cover`}
            />
          </a>
        ) : (
          <div className="rounded-xl overflow-hidden border border-foreground/10 mb-4">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={imageWidth ?? 1600}
              height={imageHeight ?? 900}
              className={`w-full h-auto ${enforceAspectRatio ? "aspect-video" : ""} object-cover`}
            />
          </div>
        )
      ) : (
        <div className="rounded-xl border border-foreground/10 mb-4 aspect-video bg-foreground/5" />
      )}
      <p className="font-sans">
        <span className="font-bold italic">
          {href ? (
            <a href={href} target="_blank" className="underline">
              {title}
            </a>
          ) : (
            title
          )}
          {label && ` - ${label}`}
        </span>
        <br />
        {description}
      </p>
    </div>
  );
}

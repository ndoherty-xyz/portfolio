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
  className?: string;
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
  className,
}: ProjectCardProps) {
  return (
    <div className={`${className} group`}>
      {imageSrc ? (
        href ? (
          <a href={href} target="_blank" className="block rounded-sm shadow-md transition-all overflow-hidden mb-3">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={imageWidth ?? 1600}
              height={imageHeight ?? 900}
              className={`w-full h-auto ${enforceAspectRatio ? "aspect-video" : ""} object-cover`}
            />
          </a>
        ) : (
          <div className="rounded-sm shadow-sm transition-all overflow-hidden mb-4">
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
        <div className="rounded-sm shadow-sm transition-all mb-4 aspect-video bg-foreground/5" />
      )}
      <div className="flex flex-col">
        <span className="font-serif tracking-tight text-lg font-med">
          {href ? (
            <a href={href} target="_blank" className="group-hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
          {label && ` - ${label}`}
        </span>
        <p className="tracking-tight text-foreground-secondary text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

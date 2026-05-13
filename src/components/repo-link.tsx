interface RepoLinkProps {
  title: string;
  href: string;
  description: string;
}

export function RepoLink({ title, href, description }: RepoLinkProps) {
  return (
    <a href={href} target="_blank" className="group">
      <div className="flex flex-row gap-2 items-baseline">
        <h3 className="font-serif text-md group-hover:underline tracking-tighter">
          {title}
        </h3>
        <p className="text-sm text-foreground-secondary tracking-tight">{description}</p>
      </div>
    </a>
  );
}

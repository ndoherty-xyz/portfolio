interface RepoLinkProps {
  title: string;
  href: string;
  description: string;
}

export function RepoLink({ title, href, description }: RepoLinkProps) {
  return (
    <p className="font-sans">
      <span className="font-bold italic">
        <a href={href} target="_blank" className="underline">
          {title}
        </a>
      </span>
      {" - "}
      {description}
    </p>
  );
}

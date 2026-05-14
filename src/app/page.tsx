import { ProjectCard } from "@/components/project-card";
import { RepoLink } from "@/components/repo-link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[72px] py-[24px] sm:py-[48px] md:py-[96px] no-scrollbar">

      <div className="flex flex-col">
        <h2 className="font-serif text-2xl tracking-tighter">Nick Doherty</h2>
        <p className="font-sans text-md tracking-tight text-foreground-secondary">sole engineer, co-founder, occasional designer. building Telescope.</p>
      </div>

      <div className="flex flex-col">
        <h2 className="font-serif text-xl tracking-tighter">Now</h2>
        <p className="font-sans text-sm tracking-tight text-foreground-secondary">
          Open to frontend or full-stack roles, contract or full time. Building Telescope on the side. Contract work lives at{" "}
          <a
            target="_blank"
            href="https://switchback.works"
            className="underline"
          >
            Switchback
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h2 className="font-serif text-xl tracking-tighter">Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            className="md:col-span-2"
            title="Telescope"
            href="https://telescope.fyi"
            imageSrc="/images/telescope-portfolio.webp"
            enforceAspectRatio={false}
            description="Co-founded Telescope, a member-funded network for people with taste. Discovery without algorithms. Places, products, and things to read, recommended by others in the network. I own all product engineering and built the platform end-to-end. Currently focused on bringing more curators in."
          />
          <ProjectCard
            enforceAspectRatio={false}
            title="plinq"
            href="https://plinq.dev"
            imageSrc="/images/plinq.png"
            imageAlt="plinq"
            description="Dependency-free Web Audio API wrapper for adding programmatic UI sounds to web apps. Preset sounds, custom synthesis, and a clean API."
          />
          <ProjectCard
            enforceAspectRatio={false}
            title="plinq orb"
            imageSrc="/images/plinq-orb.gif"
            imageAlt="plinq orb"
            href="https://orb.plinq.dev"
            description="Conversational UI for designing sounds with plinq. Describe any sound, hear the result through a reactive orb."
          />
          <ProjectCard
            title="Fluidkey"
            href="https://fluidkey.com"
            imageSrc="https://fluidkey.com/opengraph-image.png"
            description="Unified web app into cross-platform Expo codebase (web/iOS/Android) with platform-specific auth architecture; shipped in 12 weeks"
          />
          <ProjectCard
            title="Kiosk (formerly Mirror)"
            imageSrc="/images/mirror.jpeg"
            imageHeight={500}
            imageWidth={1500}
            description="Built checkout and rewards system powering 1M+ transactions; co-built React Native social app shipped to 500+ Testflight testers"
          />
        </div>
      </div>



      <div className="flex flex-col gap-[12px]">
        <h2 className="font-serif text-xl tracking-tighter">Other work</h2>
        <div className="pl-[12px] md:max-w-[50vw] flex flex-col gap-2">
          <RepoLink
            title="Agora"
            href="https://github.com/ndoherty-xyz/agora"
            description="Single global document, multi-person editor"
          />
          <RepoLink
            title="Sisyphus"
            href="https://github.com/ndoherty-xyz/sisyphus"
            description="Multi-tenant webhook system demo"
          />
          <RepoLink
            title="Hydra"
            href="https://github.com/ndoherty-xyz/hydra"
            description="CLI session manager for multiple Claude Code instances"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="font-serif text-xl tracking-tighter">Links</h2>

        <p className="font-sans text-sm mb-[48px] text-foreground-secondary tracking-tight">
          <a
            target="_blank"
            href="/Nick_Doherty_Resume.pdf"
            className="underline"
          >
            Resume
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            href="mailto:nicholasmdoherty@gmail.com"
            className="underline"
          >
            Email
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            href="https://github.com/ndoherty-xyz"
            className="underline"
          >
            Github
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicholasmdoherty"
            className="underline"
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            href="https://twitter.com/nd__xyz"
            className="underline"
          >
            Twitter
          </a>
        </p>
      </div>

    </div>
  );
}

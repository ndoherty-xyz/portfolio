import { ProjectCard } from "@/components/project-card";
import { RepoLink } from "@/components/repo-link";

export default function Home() {
  return (
    <div className="gap-[24px] py-[24px] sm:py-[48px] md:py-[96px] no-scrollbar">
      <h3>
        I&apos;m <span className="font-bold italic">Nick Doherty</span>
      </h3>
      <p className="font-sans pl-[24px] md:max-w-[50vw]">
        I&apos;ve been sole/early engineer at multiple companies and have both design and engineering experience.
      </p>

      <br />
      <br />

      <h3>
        <span className="font-bold italic">Projects</span>
      </h3>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>

      <br />
      <br />

      <h3>
        <span className="font-bold italic">Previous work</span>
      </h3>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Telescope"
          href="https://telescope.fyi"
          imageSrc="https://cdn.telescope.fyi/metadata/telescope-og.jpg"
          description="Built a subscription curation platform end-to-end as sole engineer; 2,500+ waitlist signups, now in a private beta"
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

      <br />
      <br />

      <h3>
        <span className="font-bold italic">Other repos</span>
      </h3>
      <br />
      <div className="pl-[24px] md:max-w-[50vw] flex flex-col gap-2">
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

      <br />
      <br />

      <h3>
        <span className="font-bold italic">Now</span>
      </h3>
      <p className="font-sans">
        Open to senior FE or full-stack roles. Contract work lives at{" "}
        <a
          target="_blank"
          href="https://switchback.works"
          className="underline"
        >
          Switchback
        </a>
        .
      </p>

      <br />
      <br />

      <h3>
        <span className="font-bold italic">Links</span>
      </h3>
      <p className="font-sans mb-[48px]">
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
  );
}

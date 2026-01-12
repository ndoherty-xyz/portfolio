export default function Home() {
  return (
    <div className=" gap-[24px] p-[24px] sm:p-[48px] md:p-[96px] no-scrollbar">
      <h3>
        I&apos;m <span className="font-bold italic">Nick Doherty</span>
      </h3>
      <p className="font-sans pl-[24px] md:max-w-[50vw]">
        A software engineer who pushes for better product decisions. I&apos;ve
        worked on small teams where figuring out what to build next was part of
        the job.
      </p>
      <br />
      <br />
      <h3>
        <span className="font-bold italic">Previous work</span>
      </h3>
      <br />
      <div className="pl-[24px] md:max-w-[50vw]">
        <p className="font-sans">
          <span className="font-bold italic">
            <a
              href="https://telescope.fyi"
              target="_blank"
              className="underline"
            >
              Telescope
            </a>{" "}
            - Contract
          </span>
          <br />
          {
            "Sole engineer on a subscription curation platform MVP; over 2,000 waitlist signups pre-launch"
          }
        </p>
        <br />
        <p className="font-sans">
          <span className="font-bold italic">
            <a
              href="https://fluidkey.com"
              target="_blank"
              className="underline"
            >
              Fluidkey
            </a>{" "}
            - Contract
          </span>
          <br />
          {
            "Ported web app to unified Expo codebase (web/iOS/Android) in 12 weeks"
          }
        </p>
        <br />
        <p className="font-sans">
          <span className="font-bold italic">
            Kiosk (formerly Mirror) - Full Time
            <br />
          </span>
          {
            "Built checkout system powering over 1M successful checkouts and over $150k distributed in rewards"
          }
        </p>
      </div>

      <br />
      <br />
      <h3>
        <span className="font-bold italic">Now</span>
      </h3>
      <p className="font-sans">
        Open to senior FE or full-stack roles on small teams with high
        ownership. Denver-based. Contract work at{" "}
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

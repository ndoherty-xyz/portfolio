export default function Home() {
  return (
    <div className=" gap-[24px] p-[24px] sm:p-[48px] md:p-[96px] no-scrollbar">
      <h3>
        I&apos;m <span className="font-bold italic">Nick Doherty</span>
      </h3>
      <p className="font-sans pl-[24px] md:max-w-[50vw]">
        A product-focused software engineer who ships 0→1. I like cleaning up
        flows, making things fast, and owning the rough edges (auth, payments,
        infra).
      </p>
      <br />
      <br />
      <h3>
        <span className="font-bold italic">Previous work</span>
      </h3>
      <br />
      <div className="pl-[24px] md:max-w-[50vw]">
        <p className="font-sans">
          <span className="font-bold italic">Telescope - Contract</span>
          <br />
          {
            "Built the web app MVP solo: subscription-gated product with a curator revenue share, async jobs that keep feeds fresh, and caching that hits ~91% on static assets. Pre-beta with ~2k verified on the waitlist."
          }
        </p>
        <br />
        <p className="font-sans">
          <span className="font-bold italic">Fluidkey - Contract</span>
          <br />
          {
            "Ported the web app to one Expo codebase across web/iOS/Android in ~12 weeks. Overhauled auth with device-held keys while keeping existing flows; shipped TestFlight for internal QA."
          }
        </p>
        <br />
        <p className="font-sans">
          <span className="font-bold italic">
            Kiosk (formerly Mirror) - Full Time engineer
            <br />
          </span>
          {
            "Simplified checkout site-wide and added a multi-currency rewards system; that work powered roughly 1M successful checkouts and >$150k paid out. After that, I built the first Kiosk Farcaster client prototypes."
          }
        </p>
      </div>

      <br />
      <br />
      <h3>
        <span className="font-bold italic">Now</span>
      </h3>
      <p className="font-sans">
        Open to mid/senior FE or full-stack roles. Denver-based. Studio/contract
        work lives at{" "}
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
      <p className="font-sans">
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
          href="mailto:ndoherty.xyz@gmail.com"
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

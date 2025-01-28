import React, { useState } from "react";
import { GitHub, Mail, PenTool, Twitter } from "react-feather";

import "./scss/Home.scss";

const Home = () => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
  });

  return (
    <div className="home" style={{ height: windowHeight }}>
      <div className="home-top">
        <div>
          <span>I'm Nick</span>
          <span>I'm a fullstack developer with a frontend & design focus.</span>
          <span>
            Currently open for freelance projects, get in touch below.
          </span>
        </div>

        <div>
          <Mail
            size={18}
            strokeWidth={2.5}
            onClick={() =>
              window.open("mailto:ndoherty.xyz@gmail.com", "_blank")
            }
          />
          <Twitter
            size={18}
            strokeWidth={2.5}
            onClick={() => window.open("https://twitter.com/nd__xyz", "_blank")}
          />
          <GitHub
            size={18}
            strokeWidth={2.5}
            onClick={() =>
              window.open("https://github.com/ndoherty-xyz", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

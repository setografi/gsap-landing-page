import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeaderEvent() {
  const headerRef = useRef();

  useGSAP(
    () => {
      const timeLine = gsap.timeline({ defaults: { duration: 1 } });

      timeLine.fromTo(
        ".first-row .bold-text",
        { y: 100 },
        { y: 0, opacity: 1 },
        "<"
      );
      timeLine.fromTo(
        ".second-row .bold-text",
        { y: 100 },
        { y: 0, opacity: 1, delay: 0.5 }
      );

      const isMobile = !window.matchMedia("(min-width: 768px)").matches;

      if (isMobile) {
        timeLine.fromTo(
          ".mobile-row .copy",
          { y: 100 },
          { y: 0, opacity: 1, delay: 0.5 }
        );
        timeLine.fromTo(
          ".mobile-row .cta",
          { y: 100 },
          { y: 0, opacity: 1, delay: 0.5 }
        );
      } else {
        timeLine.fromTo(
          ".first-row .copy",
          { y: 100 },
          { y: 0, opacity: 1, delay: 0.5 }
        );
        timeLine.set(".round-text", { opacity: 1, delay: 0.5 });
      }
    },
    { scope: headerRef }
  );

  return (
    <>
      <section ref={headerRef}>
        <header>
          <div className="first-row flex p-4 justify-center md:justify-start items-center gap-4 md:gap-8 lg:gap-12 text-center md:text-left md:pt-8 lg:pt-16">
            <p className="bold-text font-bold text-5xl lg:text-6xl xl:text-8xl opacity-0">
              The Possibilities
            </p>

            <p className="copy font-medium hidden md:flex md:flex-col opacity-0">
              <span>We believe that workspaces</span>
              <span>should be friendly and convenient.</span>
              <span>Here is an invitation into our how</span>
              <span>we design workspaces at curved.</span>
            </p>
          </div>

          <div className="second-row flex p-4 justify-center md:justify-start items-center gap-4 md:gap-8 lg:gap-12 text-center md:text-left second-row">
            <p className="bold-text font-bold text-5xl lg:text-6xl xl:text-8xl lg:pl-16 xl:pl-36 opacity-0">
              Of Workspaces
            </p>

            <p className="round-text hidden md:block pl-20 lg:pl-40 opacity-0">
              <svg
                className="animate-spin-slow"
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
              >
                <path
                  d="M0,53a53,53 0 1,0 106,0a53,53 0 1,0 -106,0"
                  id="curve"
                ></path>
                <text width="314.1593">
                  <textPath
                    className="text-xs fill-black"
                    alignmentBaseline="top"
                    xlinkHref="#curve"
                  >
                    office workspace . office workspace . office workspace .
                  </textPath>
                </text>
                <defs></defs>
              </svg>
            </p>
          </div>

          <div className="mobile-row flex p-4 justify-center md:justify-start items-center gap-4 md:gap-8 lg:gap-12 text-center md:text-left md:hidden flex-col py-4">
            <p className="copy font-medium opacity-0">
              <span>We believe that workspaces</span>
              <span>should be friendly and convenient.</span>
              <span>Here is an invitation into our how</span>
              <span>we design workspaces at curved.</span>
            </p>

            <button className="cta opacity-0">Let's work together</button>
          </div>
        </header>
      </section>
    </>
  );
}

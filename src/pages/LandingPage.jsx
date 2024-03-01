import { useRef } from "react";
import LogoImage from "../assets/logo.jpg";
import OfficeImage from "../assets/office.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function LandingPage() {
  const container = useRef();

  useGSAP(
    () => {
      const timeLine = gsap.timeline({ defaults: { duration: 1 } });

      timeLine.to(".pre-loader > .overlay", { top: "75%" });
      timeLine.to(".pre-loader > .overlay", { top: "50%", delay: 0.5 });
      timeLine.to(".pre-loader > .overlay", { top: "25%", delay: 0.5 });
      timeLine.to(".pre-loader > .overlay", { top: "0", delay: 0.5 });
      timeLine.to(".pre-loader", { width: "80vw", left: 0, top: "50%" });
      timeLine.set(".pre-loader", { "z-index": -20 });

      timeLine.fromTo("nav", { y: -100 }, { y: 0, opacity: 1 });
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
    { scope: container }
  );

  return (
    <>
      <section ref={container}>
        <nav className=" flex justify-center items-center gap-4 p-4 md:py-8 md:px-4 lg:p-12 opacity-0">
          <img className="w-[120px]" src={LogoImage} alt="logo" />
          <div className="hidden md:flex gap-4 lg:gap-8 lg:mx-16 xl:mx-20">
            <a className="underline" href="#">
              Home
            </a>
            <a className="underline" href="#">
              Shop
            </a>
            <a className="underline" href="#">
              Contact
            </a>
            <a className="underline" href="#">
              Testimonials
            </a>
          </div>
          <button className="rounded bg-black text-white py-2 px-4 hidden md:inline-block">
            Let's work together
          </button>
        </nav>
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
        <div className="pre-loader absolute z-10">
          <img src={OfficeImage} alt="an office" />
          <div className="overlay absolute inset-x-0 bottom-0 top-full bg-black bg-opacity-10 -z-0"></div>
        </div>{" "}
      </section>
    </>
  );
}

export default LandingPage;

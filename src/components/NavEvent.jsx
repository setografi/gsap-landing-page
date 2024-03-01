import { useRef } from "react";
import LogoImage from "../assets/logo.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavEvent() {
  const navbarRef = useRef();

  useGSAP(
    () => {
      const timeLine = gsap.timeline({ defaults: { duration: 1 } });

      timeLine.fromTo("nav", { y: -100 }, { y: 0, opacity: 1 });
    },
    { scope: navbarRef }
  );

  return (
    <>
      <section ref={navbarRef}>
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
      </section>
    </>
  );
}

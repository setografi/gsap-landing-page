import { useRef } from "react";
import OfficeImage from "../assets/office.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function PreloaderEvent() {
  const preloaderRef = useRef();

  useGSAP(
    () => {
      const timeLine = gsap.timeline({ defaults: { duration: 1 } });

      timeLine.to(".pre-loader > .overlay", { top: "75%" });
      timeLine.to(".pre-loader > .overlay", { top: "50%", delay: 0.5 });
      timeLine.to(".pre-loader > .overlay", { top: "25%", delay: 0.5 });
      timeLine.to(".pre-loader > .overlay", { top: "0", delay: 0.5 });
      timeLine.to(".pre-loader", { width: "80vw", left: 0, top: "50%" });
      timeLine.set(".pre-loader", { "z-index": -20 });
    },
    { scope: preloaderRef }
  );

  return (
    <>
      <section ref={preloaderRef}>
        <div className="pre-loader absolute z-10">
          <img src={OfficeImage} alt="an office" />
          <div className="overlay absolute inset-x-0 bottom-0 top-full bg-black bg-opacity-10 -z-0"></div>
        </div>{" "}
      </section>
    </>
  );
}

export default PreloaderEvent;

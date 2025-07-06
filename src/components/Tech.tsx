import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTechs = isMobile ? technologies.slice(0, 8) : technologies;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechs.map((tech, index) => {

        return (
          <div ref={ref} className="w-28 h-28" key={tech.name + index}>
            {inView ? <BallCanvas icon={tech.icon} /> : null}
          </div>
        );
      })}
    </div>
  );
};

const WrappedTech = SectionWrapper({ Component: Tech, idName: "tech" });
export default WrappedTech;

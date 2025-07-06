import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { useEffect, useState } from "react";
import TechBall from "./hooks/techball";
const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTechs = isMobile ? technologies.slice(0, 8) : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechs.map((tech, index) => (
        <TechBall key={tech.name + index} icon={tech.icon} />
      ))}
    </div>
  );
};

const WrappedTech = SectionWrapper({ Component: Tech, idName: "tech" });
export default WrappedTech;

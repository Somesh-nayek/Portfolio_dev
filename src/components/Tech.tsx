import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => {
        const { ref, inView } = useInView({
          threshold: 0.2,
          triggerOnce: false, // this is important!
        });

        return (
          <div ref={ref} className="w-28 h-28" key={tech.name}>
            {inView ? <BallCanvas icon={tech.icon} /> : null}
          </div>
        );
      })}
    </div>
  );
};

const WrappedTech = SectionWrapper({ Component: Tech, idName: "tech" });
export default WrappedTech;

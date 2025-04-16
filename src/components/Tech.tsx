import { BallCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies  } from "../constants";
const Tech = () => {
  return <div className="flex flex-row flex-wrap justify-center ga=-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
}
  
const WrappedTech = SectionWrapper({ Component: Tech, idName: "tech" });
export default WrappedTech;
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

type Props={
  title:string,
  index:number,
  icon:string
}
const ServiceCard=({title,index,icon}:Props)=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div data-options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 
        min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[18px] 
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("right","spring",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl
      leading-[30px]">
        I'm a skilled software developer with experience in  C++, Python, and JavaScript, along with expertise in frameworks like React, Next.js, Node.js, and the MERN stack. I’m a quick learner who thrives on solving complex problems and delivering efficient, scalable, and user-friendly solutions. With a strong foundation in programming and an eye for detail, I aim to turn innovative ideas into impactful applications. Let’s work together to make your vision a reality!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service,index)=>{
          return<ServiceCard icon={service.icon} key={`service-${index}`} title={service.title} index={index}/>
        })}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper({ Component: About, idName: "about" });
export default WrappedAbout;
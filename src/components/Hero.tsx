import {motion} from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  // console.log("Hero component inView:", inView);
  return (
    <section ref={ref} className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute -translate-y-10 inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row  gap-5`}
      >
        <div className="flex flex-col  items-center ">
          <div className="h-5 w-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Somesh</span>
          </h1>
          <p
            className={`${styles.heroSubText}
           mt-2 text-white-100`}
          >
            I make eye-pleasing websites
            <br className="sm:block hidden" />
            and I'm a enthusiastic aspiring software engineer
          </p>
        </div>
      </div>
      <ComputersCanvas inView={inView}/>
      <div className="absolute translate-y-[30px] xs:bottom-10 bottom-32
       w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4
            border-secondary flex justify-center items-start p-2">
              <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
      </div>
    </section>
  );
};

export default Hero;

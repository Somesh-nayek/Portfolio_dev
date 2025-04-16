import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

type Props = {
  title: string;
  institution: string;
  year: string;
  details: string;
  score: string;
  image: string;
};
const FeedbackCard = ({ title, institution, year, details, score }: Props) => {
  return (
    <motion.div
      variants={fadeIn("none", "spring", 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{title}</p>
        <p className="blue-text-gradient tracking-wider text-[15 px]">
          {score}
        </p>
        <div className="mt-5 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white mb-2 font-medium text-[16px]">{details}</p>
            <p className="mt-1 text-secondary text-[12px]">{institution}</p>
            <p className="mt-1 text-secondary text-[12px]">{year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl 
        min-h-[300px]`}
      >
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText}`}>My Educational Journey</p>
          <h2 className={`${styles.sectionHeadText}`}>
            Academic Background
          </h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 
        pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {education.map((test, index) => {
          return <FeedbackCard key={`testimonial-${index}`} {...test} />;
        })}
      </div>
    </div>
  );
};
const WrappedFeedback = SectionWrapper({
  Component: Feedbacks,
  idName: "Feedback",
});
export default WrappedFeedback;
// export default Feedbacks;

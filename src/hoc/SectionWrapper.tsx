import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

type Props = {
  Component: React.FC;
  idName: string;
};

const SectionWrapper = ({ Component, idName }: Props) => {
  const HOC: React.FC = () => (
    <motion.section
      variants={staggerContainer(1,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  // Add a display name for debugging and fast refresh
  HOC.displayName = `SectionWrapper(${idName})`;

  return HOC;
};

export default SectionWrapper;

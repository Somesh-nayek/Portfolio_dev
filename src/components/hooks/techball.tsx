import { useInView } from "react-intersection-observer";
import { BallCanvas } from "./../canvas/index";

const TechBall = ({ icon }: { icon: string }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="w-28 h-28">
      {inView ? <BallCanvas icon={icon} /> : null}
    </div>
  );
};

export default TechBall;

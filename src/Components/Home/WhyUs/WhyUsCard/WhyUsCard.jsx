import { useEffect, useRef, useState } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import AnimatedLine from "../../../Shared/MiniComponents/AnimatedLine/AnimatedLine";
import WhyUsContent from "../WhyUsContent/WhyUsContent";
import s from "./WhyUsCard.module.scss";

const WhyUsCard = () => {
  const cardRef = useRef();
  const [rootMargin, setRootMargin] = useState("0px");

  const activeClass = useClassOnFirstView({
    elementRef: cardRef,
    cssModule: s,
    option: {
      rootMargin,
      threshold: 1,
    },
  });

  useEffect(() => {
    setRootMargin(cardRef?.current?.scrollHeight + "px");
  }, []);

  return (
    <div className={`${s.card} ${activeClass}`} ref={cardRef}>
      <div className={s.animatedLine}>
        <AnimatedLine
          lineHeight="505px"
          yAxis="150px"
          animateTo="60px"
          delay=".9s"
          lineColors={{
            lineColor: "#b4b4b4",
            animatedLineColor: "#fff",
          }}
        />
      </div>

      <WhyUsContent />
    </div>
  );
};
export default WhyUsCard;

import { useEffect, useRef, useState } from "react";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import useLongLineProperties from "src/Hooks/App/useLongLineProperties";
import VerticalLine from "../../../../Shared/MiniComponents/VerticalLine/VerticalLine";
import WhyUsContent from "../WhyUsContent/WhyUsContent";
import s from "./WhyUsCard.module.scss";

const WhyUsCard = () => {
  const cardRef = useRef();
  const [rootMargin, setRootMargin] = useState("0px");
  const { lineHeight, initialY, animateTo } = useLongLineProperties();

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
      <VerticalLine
        lineHeight={lineHeight}
        initialY={initialY}
        animateTo={animateTo}
        delay=".9s"
        isPositioned={false}
        lineColors={{
          lineColor: "#b4b4b4",
          VerticalLineColor: "#fff",
        }}
      />

      <WhyUsContent />
    </div>
  );
};
export default WhyUsCard;

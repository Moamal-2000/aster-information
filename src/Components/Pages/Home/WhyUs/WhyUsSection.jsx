import { useState } from "react";
import { whyUsSectionBg } from "src/Assets/Images/Images";
import useEventListener from "src/Hooks/Helper/useEventListener";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  const [shouldShowImg, setShouldShowImg] = useState(false);
  const activeClass = shouldShowImg ? s.active : "";

  useEventListener(
    window,
    "scroll",
    () => {
      const pageHeight = document.documentElement.offsetHeight;
      const isAtVeryBottom =
        window.scrollY + window.innerHeight + 100 >= pageHeight;

      setShouldShowImg(!(isAtVeryBottom || window.scrollY <= 0));
    },
    []
  );

  return (
    <section className={`${s.whyUsSection} ${activeClass}`}>


      <div className="container">
        <WhyUsCard />
      </div>
    </section>
  );
};
export default WhyUsSection;

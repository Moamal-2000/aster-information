import { whyUsSectionBg } from "src/Assets/Images/Images";
import useScrollActiveClass from "src/Hooks/App/useScrollActiveClass";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import s from "./WhyUsSection.module.scss";

const WhyUsSection = () => {
  const activeClass = useScrollActiveClass(s);

  return (
    <section className={`${s.whyUsSection} ${activeClass}`}>
      <img
        src={whyUsSectionBg}
        alt="Modern data center with rows of server racks, LED indicators, and cabling, arranged symmetrically on a polished floor."
        loading="lazy"
        className={s.backgroundImg}
      />

      <div className="container">
        <WhyUsCard />
      </div>
    </section>
  );
};
export default WhyUsSection;

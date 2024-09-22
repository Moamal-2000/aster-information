import { useRef } from "react";
import { partnersSectionData } from "src/Data/staticData";
import useClassOnFirstView from "src/Hooks/App/useClassOnFirstView";
import s from "./Partners.module.scss";

const Partners = () => {
  const partnerRef = useRef();
  const activeClass = useClassOnFirstView({
    elementRef: partnerRef,
    cssModule: s,
  });

  return (
    <div className={`${s.partners} ${activeClass}`} ref={partnerRef}>
      {partnersSectionData.map(({ id, img, partner }) => (
        <img key={id} src={img} alt={partner} loading="lazy" />
      ))}
    </div>
  );
};
export default Partners;

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
      {partnersSectionData.map(({ id, img, partner, website }) => (
        <a href={website} key={id} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt={partner}
            loading="lazy"
            width="130px"
            height="60px"
          />
        </a>
      ))}
    </div>
  );
};
export default Partners;

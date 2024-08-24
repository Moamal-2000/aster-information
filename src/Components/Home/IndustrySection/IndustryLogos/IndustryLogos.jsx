import { industryLogosData } from "src/Data/staticData";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import s from "./IndustryLogos.module.scss";

const IndustryLogos = () => {
  return (
    <div className={s.logos}>
      {industryLogosData.map(({ id, logo, title, width, height }) => (
        <AnimatedLogo
          key={id}
          imgSrc={logo}
          imgAlt={title}
          title={title}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};
export default IndustryLogos;

import { partnersSectionData } from "src/Data/staticData";
import s from "./Partners.module.scss";

const Partners = () => {
  return (
    <div className={s.partners}>
      {partnersSectionData.map(({ id, img, partner }) => (
        <img key={id} src={img} alt={partner} loading="lazy" />
      ))}
    </div>
  );
};
export default Partners;

import { locationSectionBg } from "src/Assets/Images/Images";
import LocationContent from "./LocationContent/LocationContent";
import s from "./LocationSection.module.scss";

const LocationSection = () => {
  return (
    <section className={s.locationSection}>
      <div className="container" data-container>
        <LocationContent />

        <img
          src={locationSectionBg}
          alt="Line drawing of a modern architectural structure with multiple rectangular blocks of varying heights, featuring horizontal and vertical lines."
          className={s.locationBg}
          loading="lazy"
        />
      </div>
    </section>
  );
};
export default LocationSection;

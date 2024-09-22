import { locationSectionBg } from "src/Assets/Images/Images";
import s from "./LocationSection.module.scss";
import LocationContent from "./LocationContent/LocationContent";

const LocationSection = () => {
  return (
    <section className={s.locationSection}>
      <div className="container" data-container>
        <LocationContent />

        <img
          src={locationSectionBg}
          alt="Location section background image"
          loading="lazy"
          className={s.locationBg}
        />
      </div>
    </section>
  );
};
export default LocationSection;

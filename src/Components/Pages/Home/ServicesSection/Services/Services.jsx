import { servicesData } from "src/Data/staticData";
import Service from "./Service/Service";
import ServiceContent from "./Service/ServiceContent";
import s from "./Services.module.scss";

const Services = () => {
  return (
    <div className={s.services}>
      {servicesData.map(({ id, dir, title, description, img, alt }) => (
        <Service key={id} dir={dir}>
          <div className="container" data-container>
            <ServiceContent
              title={title}
              description={description}
              buttonText={"Explore our services"}
              buttonPath={"/technology"}
            />

            <div className={s.serviceImgHolder}>
              <img src={img} alt={alt} loading="lazy" />
            </div>
          </div>
        </Service>
      ))}
    </div>
  );
};
export default Services;

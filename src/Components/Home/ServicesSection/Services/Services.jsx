import { serviceSectionBg1 } from "../../../../Assets/Images/Images";
import Service from "./Service/Service";
import ServiceContent from "./Service/ServiceContent";
import s from "./Services.module.scss";

const Services = () => {
  return (
    <div className={s.services}>
      <Service dir="ltr">
        <ServiceContent
          title={"INTEGRATED MANAGEMENT"}
          description={`Comprehensive Information and Data Management
            services form the core of our offerings. We aim to organize,
            secure, and streamline your business data,
            maximizing its value. Our services encompass database
            management, data quality, security, and information strategy,
            driving value and business outcomes.`}
          buttonText={"Read More"}
          buttonPath={"/technology"}
        />

        <img src={serviceSectionBg1} alt="" />
      </Service>
    </div>
  );
};
export default Services;

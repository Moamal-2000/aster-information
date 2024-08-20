import {
  serviceSectionBg1,
  serviceSectionBg2,
  serviceSectionBg3,
} from "src/Assets/Images/Images";
import Service from "./Service/Service";
import ServiceContent from "./Service/ServiceContent";
import s from "./Services.module.scss";

const Services = () => {
  return (
    <div className={s.services}>
      <Service dir="ltr">
        <div className="container">
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
        </div>

        <div className={`${s.serviceImgHolder} ${s.serviceImgHolder1}`}>
          <img src={serviceSectionBg1} alt="" />
        </div>
      </Service>

      <Service dir="rtl">
        <div className="container">
          <ServiceContent
            title={"SOFTWARE SOLUTIONS"}
            description={`We offer custom software development services designed
              to meet your business needs. Our team specializes in creating
              efficient, scalable, and robust software solutions that can
              transform your business operations. From crafting intuitive mobile
              apps to architecting complex enterprise systems, we deliver
              solutions tailored to your needs.`}
            buttonText={"Read More"}
            buttonPath={"/technology"}
          />
        </div>

        <div className={s.serviceImgHolder}>
          <img src={serviceSectionBg2} alt="" />
        </div>
      </Service>

      <Service dir="ltr">
        <div className="container">
          <ServiceContent
            title={"IT CONSULTING"}
            description={`Our IT Consulting services provide strategic guidance in
              leveraging technology for growth. We offer system design and project
              management, ensuring your technology infrastructure aligns with your
              business objectives. Trust us to be your navigators in the complex
              and ever-evolving tech landscape.`}
            buttonText={"Read More"}
            buttonPath={"/technology"}
          />
        </div>

        <div className={`${s.serviceImgHolder} ${s.serviceImgHolder3}`}>
          <img src={serviceSectionBg3} alt="" />
        </div>
      </Service>
    </div>
  );
};
export default Services;

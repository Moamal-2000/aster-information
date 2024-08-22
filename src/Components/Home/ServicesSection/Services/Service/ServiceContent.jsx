import Button from "../../../../Shared/Buttons/Button/Button";
import s from "./ServiceContent.module.scss";

const ServiceContent = ({ title, description, buttonText, buttonPath }) => {
  return (
    <section className={s.serviceContent}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Button text={buttonText} path={buttonPath} />
    </section>
  );
};
export default ServiceContent;

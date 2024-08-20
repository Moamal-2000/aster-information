import { Link } from "react-router-dom";
import SvgIcon from "../../../../Shared/MiniComponents/SvgIcon";
import s from "./ServiceContent.module.scss";

const ServiceContent = ({ title, description, buttonText, buttonPath }) => {
  return (
    <section className={s.serviceContent}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Link to={buttonPath} className={s.button}>
        <span>{buttonText}</span>

        <div className={s.arrowHolder}>
          <SvgIcon name="arrowRight" />
        </div>
      </Link>
    </section>
  );
};
export default ServiceContent;

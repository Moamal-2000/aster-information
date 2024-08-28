import s from "./Service.module.scss";

const Service = ({ dir, children }) => {
  return (
    <div className={s.service} dir={dir}>
      {children}
    </div>
  );
};
export default Service;

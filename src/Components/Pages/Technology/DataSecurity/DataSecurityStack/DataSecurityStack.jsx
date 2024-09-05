import s from "./DataSecurityStack.module.scss";

const DataSecurityStack = ({ title, children }) => {
  return (
    <div className={s.stackContent}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
export default DataSecurityStack;

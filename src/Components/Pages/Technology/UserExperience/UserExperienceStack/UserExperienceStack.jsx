import s from "./UserExperienceStack.module.scss";

const UserExperienceStack = ({ title, children }) => {
  return (
    <div className={s.stackContent}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
export default UserExperienceStack;

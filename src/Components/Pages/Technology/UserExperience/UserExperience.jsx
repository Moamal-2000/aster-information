import s from "./UserExperience.module.scss";
import UserExperienceStack from "./UserExperienceStack/UserExperienceStack";

const UserExperience = () => {
  return (
    <section className={s.userExperience}>
      <div className="container" data-container>
        <UserExperienceStack title="ENHANCED USER EXPERIENCE">
          our focus is on creating user-friendly, intuitive software solutions
          that enhance productivity and streamline operations. We are committed
          to improving the user experience by designing systems that simplify
          complex tasks, making them more manageable and efficient.
        </UserExperienceStack>
      </div>
    </section>
  );
};
export default UserExperience;

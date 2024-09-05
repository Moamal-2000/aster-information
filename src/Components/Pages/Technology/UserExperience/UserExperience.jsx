import { userExperienceData } from "src/Data/staticData";
import s from "./UserExperience.module.scss";
import UserExperienceStack from "./UserExperienceStack/UserExperienceStack";

const UserExperience = () => {
  return (
    <section className={s.userExperience}>
      <div className="container" data-container>
        {userExperienceData.map(({ id, title, description }) => (
          <UserExperienceStack key={id} title={title}>
            {description}
          </UserExperienceStack>
        ))}
      </div>
    </section>
  );
};
export default UserExperience;

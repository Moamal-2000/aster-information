import s from "./JoinUs.module.scss";
import JoinUsForm from "./JoinUsForm/JoinUsForm";

const JoinUs = () => {
  return (
    <main className={s.joinUsPage} id="joinUsPage">
      <h1>Join Us</h1>

      <JoinUsForm />
    </main>
  );
};
export default JoinUs;

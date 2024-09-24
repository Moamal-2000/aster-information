import { Helmet } from "react-helmet-async";
import { WEBSITE_NAME } from "src/Data/variables";
import s from "./JoinUs.module.scss";
import JoinUsForm from "./JoinUsForm/JoinUsForm";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Join Us | {WEBSITE_NAME}</title>
        <meta name="description" content="Join Us page description" />
      </Helmet>

      <main className={s.joinUsPage} id="joinUsPage">
        <h1>Join Us</h1>

        <JoinUsForm />
      </main>
    </>
  );
};
export default JoinUs;

import { Helmet } from "react-helmet-async";
import s from "./Technology.module.scss";

const Technology = () => {
  return (
    <>
      <Helmet>
        <title>Technology | Aster Information</title>
        <meta name="description" content="Technology page description" />
      </Helmet>

      <main className={s.technology} id="technology-page">
        Technology page
      </main>
    </>
  );
};
export default Technology;

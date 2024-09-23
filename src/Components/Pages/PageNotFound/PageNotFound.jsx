import { Helmet } from "react-helmet-async";
import s from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Page not found description" />
      </Helmet>

      <main className={s.pageNotFound} id="pageNotFound">
        Page not found
      </main>
    </>
  );
};
export default PageNotFound;

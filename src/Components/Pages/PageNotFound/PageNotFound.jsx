import { Helmet } from "react-helmet-async";
import { pageNotFoundBg } from "src/Assets/Images/Images";
import s from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Page not found description" />
      </Helmet>

      <div className="container">
        <main className={s.pageNotFound} id="pageNotFound">
          <section className={s.errorContent}>
            <img
              className={s.pageNotFoundBg}
              src={pageNotFoundBg}
              width="318px"
              height="223px"
              alt="Illustration of a sad browser window with a 404 error message in a blue speech bubble, indicating a 'Page Not Found' error."
            />

            <h1>PAGE NOT FOUND</h1>

            <p>
              We looked everywhere for this page. Are you sure the website URL
              is correct? Get in touch with the site owner.
            </p>

            <Link to="/">Go Back Home</Link>
          </section>
        </main>
      </div>
    </>
  );
};
export default PageNotFound;

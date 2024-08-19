import { Helmet } from "react-helmet-async"
import s from "./Careers.module.scss"

const Careers = () => {
  return     <>
  <Helmet>
    <title>Careers | Aster Information</title>
    <meta name="description" content="Careers page description" />
  </Helmet>

  <main className={s.careers} id="careers-page">
    Careers
  </main>
</>
}
export default Careers
import s from "./Service.module.scss"

const Service = ({dir, children}) => {
  return (
    <div dir={dir}>{children}</div>
  )
}
export default Service
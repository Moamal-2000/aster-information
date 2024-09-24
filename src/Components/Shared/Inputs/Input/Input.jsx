import s from "./Input.module.scss";

const Input = ({ label, required = true, type = "text", value, onChange }) => {
  return (
    <div className={s.input}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        id={label}
        name={label}
      />
    </div>
  );
};
export default Input;

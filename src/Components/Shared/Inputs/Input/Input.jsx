import s from "./Input.module.scss";

const Input = ({
  label,
  name,
  required = true,
  type = "text",
  value,
  onChange,
}) => {
  const requiredClass = required ? s.required : "";

  return (
    <div className={s.input}>
      <label htmlFor={name} className={requiredClass}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        id={name}
        name={name}
      />
    </div>
  );
};
export default Input;

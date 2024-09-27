import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./Input.module.scss";

const Input = ({
  label,
  name,
  required = true,
  type = "text",
  value,
  onChange,
  options,
  selectPlaceholder = `Select ${label}`,
}) => {
  const requiredClass = required ? s.required : "";

  if (type === "select") {
    return (
      <div className={s.input}>
        <label htmlFor={label}>{label}</label>

        <select id={label} defaultValue={""} required={required}>
          <option value="" hidden>
            {selectPlaceholder}
          </option>
          {options?.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <SvgIcon name="chevronDown" />
      </div>
    );
  }

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

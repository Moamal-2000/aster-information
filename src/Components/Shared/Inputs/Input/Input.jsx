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
  placeholder,
  resize = false,
  valid,
  isTryingSubmit,
}) => {
  const requiredClass = required ? s.required : "";
  const resizeClass = resize ? s.resize : "";
  const invalidClass = !valid && isTryingSubmit ? s.invalid : "";

  if (type === "select") {
    return (
      <div className={`${s.input} ${invalidClass}`}>
        <label htmlFor={label} className={requiredClass}>
          {label}
        </label>

        <select
          id={label}
          required={required}
          onChange={onChange}
          name={name}
          value={value}
        >
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

  if (type === "textarea") {
    return (
      <div className={`${s.input} ${invalidClass}`}>
        <label htmlFor={name} className={requiredClass}>
          {label}
        </label>
        <textarea
          className={resizeClass}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className={`${s.input} ${invalidClass}`}>
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

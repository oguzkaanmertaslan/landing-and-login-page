import React from "react";
import "./index.css";
const Field = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  fieldRef,
  inputName,
  pattern,
  disabled,
}) => {
  return (
    <div className="field-container">
      <div className="field-left-label">
        <span>{label}</span>
      </div>
      <input
        type={type}
        name={inputName}
        ref={fieldRef}
        value={value}
        onChange={onChange}
        className="field-input"
        placeholder={placeholder}
        pattern={pattern}
        disabled={disabled}
      />
    </div>
  );
};
export default Field;

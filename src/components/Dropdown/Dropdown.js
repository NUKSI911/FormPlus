import React from "react";
import PropTypes from "prop-types";
import classes from "./Dropdown.module.css";
function Dropdown({
  label,
  value,
  options,
  handleChange,
}) {
  return (
    <>
      <div className={classes.select}>
        <select onChange={handleChange} value={value} className={classes["select-text"]} required>
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label className={classes['select-label']}>{label}</label>
      </div>
    </>
  );
}

export default Dropdown;

Dropdown.defaultProps = {
  label: "Fill in Label",
  value: "",
  options: [],
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

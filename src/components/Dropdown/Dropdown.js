import React from "react";
import { SingleSelect } from "react-select-material-ui";
import PropTypes from 'prop-types'

function Dropdown({
  variant = "outlined",
  label,
  value,
  options,
  handleChange,
}) {
  return (
    <>
      <SingleSelect
        variant={variant}
        label={label}
        value={value}
        options={options}
        onChange={handleChange}
      />
    </>
  );
}

export default Dropdown;

Dropdown.defaultProps = {
  variant:"outlined",
  label:"Fill in Label",
  value:"",
  options : []
}


Dropdown.propTypes = {
  variant:PropTypes.string,
  label:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  options:PropTypes.array.isRequired,
  handleChange:PropTypes.func.isRequired,
}
import React from "react";
import { SingleSelect } from "react-select-material-ui";

function Dropdown({
  variant = "outlined",
  label,
  value,
  options,
  handleChange,
}) {

    console.log(value)
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

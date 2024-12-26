import React from "react";

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{ padding: "8px", marginRight: "10px" }}
    />
  );
};

export default Input;

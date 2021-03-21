import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <label className="form-labels">{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label className="form-labels" />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;

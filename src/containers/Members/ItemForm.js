import React from "react";

const ItemForm = ({ label, children, type = "text", disableprop,  ...otherProps }) => (
  

  <div>
    { type === "text"  ? (
      <>
        <label className="form-labels">{label}</label>
        <input type={type} {...otherProps}  disabled={true}  />
      </>
    ) : type === "textarea" ? (
        <>
        <label className="form-labels">{label}</label>
        <textarea  {...otherProps}  disabled={disableprop}/> 
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

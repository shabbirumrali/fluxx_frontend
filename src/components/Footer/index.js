import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col px-5 footer-fixed">
          <p>
            &copy; 2021 Irreverent Rogue, LLC | 
            <a href="/" rel="noreferrer" className="px-2">
              your privacy
            </a>
             |
            <a href="/" rel="noreferrer" className="px-2">
              terms
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

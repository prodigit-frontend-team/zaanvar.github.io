import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && <span className="separator"> / </span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
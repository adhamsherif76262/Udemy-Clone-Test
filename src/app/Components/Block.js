import Down from "./Down";
import {Collapse} from "@kunukn/react-collapse";
import React from "react";
import "../Courses/styles.scss";

 function Block({ isOpen, title, onToggle, children , Course}) {
  return (
    <div className="block">
      <button className="btn toggle" onClick={onToggle}>
        <span>{title}</span>
        <Down isOpen={isOpen} Course={Course} />
      </button>
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </div>
  );
}
export default Block;

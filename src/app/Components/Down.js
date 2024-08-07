import React from "react";
import cx from "classnames";
import Styles from "../Courses/CourseContent.module.css"
const Down = ({ isOpen, Course }) => {
  return (
    <>
      <div className={`${Styles.DownMotherDiv}`}>
        <div className={`${Styles.DownMotherDiv}`}>
          <div className="">{Course.lecture_count}</div>
          <span className={`${Styles.DownComponentInnerSpan}`}>Lectures</span>
        </div>
        <div className={`${Styles.DownMotherDiv}`}>
          <div className="">{Course.content_length_text}</div>
          <span className={`${Styles.DownComponentInnerSpan}`}> .mins</span>
        </div>
        <div className="">
          <svg
            className={cx("icon-down", { "is-open": isOpen })}
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M14.8 4L8 9.6 1.2 4 0 5.333 8 12l8-6.667z" />
          </svg>
        </div>
      </div>
    </>
  );
};
Down.defaultProps = {};

export default Down;

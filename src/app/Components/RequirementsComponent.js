import React from 'react'
import Styles from "../Courses/[CourseID]/CourseDetails.module.css";

function RequirementsComponent({ CourseDetails, C }) {
  return (
    <div className={`${Styles.RequirementsDiv}`}>
      <h2 className={`${Styles.RequirementsH2}`}>Requirements</h2>

      <ul className={`${Styles.RequirementsUL}`}>
        {CourseDetails[C].Requirements.map((requirement, index) => {
          return (
            <li className={`${Styles.RequirementsLi}`} key={index}>
              {requirement}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RequirementsComponent

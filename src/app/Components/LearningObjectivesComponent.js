import React from 'react'
import Styles from "../Courses/[CourseID]/CourseDetails.module.css";

function LearningObjectivesComponent({ CourseDetails, C }) {
  return (
    <div className={`${Styles.LearningObjectivesDiv}`}>
      <h2 className={`${Styles.LearningObjectivesH2}`}>What you will learn</h2>
      <ul className={`${Styles.LearningObjectivesUL}`}>
        {CourseDetails[C].learning_objective.map((item, index) => {
          return (
            <li className={`${Styles.LearningObjectivesLi}`} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LearningObjectivesComponent

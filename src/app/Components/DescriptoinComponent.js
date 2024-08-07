"use client"
import React, { useState } from 'react'
import Styles from "../Courses/[CourseID]/CourseDetails.module.css"
function DescriptoinComponent({ CourseDetails , C}) {
  const [Show_More_Less, SetShow_More_Less] = useState(false);

  return (
    <div className={`${Styles.Course_Req_Desc_Div}`}>
      <div className="">
        <h2 className={`${Styles.RequirementsH2}`}>Description</h2>
        <p className={`${Styles.DescriptionP} ${!Show_More_Less ? Styles.Gradient : ""} ${!Show_More_Less ? Styles.Overflow : ""}`}>
          {Show_More_Less
            ? CourseDetails[C].Description
            : CourseDetails[C].Description.slice(0, 1000) + "..."}
        </p>
      </div>

      {Show_More_Less ? (
        <div className="">
          <h2 className={`${Styles.RequirementsH2}`}>
            Who this course is for:
          </h2>
          <ul className={`${Styles.RequirementsUL}`}>
            {CourseDetails[C].Course_Target_Audience.map((item, index) => {
              return (
                <li className={`${Styles.RequirementsLi}`} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div
        className={`${Styles["Show_More_Less_Div"]}`}
        onClick={() => SetShow_More_Less(!Show_More_Less)}
      >
        <button className={`${Styles["Show_More_Less_Btn"]}`}>
          {Show_More_Less ? "Show Less" : "Show More"}
        </button>
        <span className={`${Styles.Show_More_Less_Span}`}>
          <img
            src={`/Images/Double-${Show_More_Less ? "up" : "down"}-chevron.png`}
          ></img>
        </span>
      </div>
    </div>
  );
}

export default DescriptoinComponent

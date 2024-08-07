"use client"
import  Rating  from "./Rating"
import React, { useState } from "react";
import Styles from "../Courses/CourseContent.module.css"
import Stl from "../Courses/[CourseID]/CourseDetails.module.css"
function InstructorComponent({CourseDetails , C}) {
    const [Show_More_Less, SetShow_More_Less] = useState(false);

  return (
    <div>
      {
          CourseDetails[C].Instructor.map((instructor,index) => {
              return (
                <div className={`${Styles.InstructorMotherDiv}`} key={index}>
                  <h2 className={`${Styles.InstructorH2}`}>Instructor</h2>
                  <h3 className={`${Styles.InstructorH3}`}>
                    <a href={instructor.profileURL}>
                      {instructor.name}
                    </a>
                  </h3>
                  <h4 className={`${Styles.InstructorH4}`}>{instructor.title}</h4>
                  <div className={`${Styles.InstructorDiv}`}>
                    <img
                      src={instructor.image}
                      className={Styles.InstructorImage}
                    ></img>
                    <div className={`${Styles.InstructorInnerDiv}`}>
                      <div className={`${Styles.InstructorRatingDiv}`}>
                        <Rating rating={instructor.rating}></Rating>
                        <span className="">Instructor Rating</span>
                      </div>
                      <p className="">
                        {`${instructor.reviews}`}
                        <span className={`${Styles.InstructorInnerSpan}`}>
                          Reviews
                        </span>
                      </p>
                      <p className="">
                        {`${instructor.students}`}
                        <span className={`${Styles.InstructorInnerSpan}`}>
                          Students
                        </span>
                      </p>
                      <p className="">
                        {`${instructor.courses}`}
                        <span className={`${Styles.InstructorInnerSpan}`}>
                          Courses
                        </span>
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${Stl.DescriptionP} ${
                      !Show_More_Less ? Stl.Gradient : ""
                    } ${!Show_More_Less ? Stl.Overflow : ""}`}
                  >
                    {Show_More_Less
                      ? instructor.Description
                      : instructor.Description.slice(0, 200) + "..."}
                  </p>
                  <div
                    className={`${Stl["Show_More_Less_Div"]}`}
                    onClick={() => SetShow_More_Less(!Show_More_Less)}
                  >
                    <button className={`${Stl["Show_More_Less_Btn"]}`}>
                      {Show_More_Less ? "Show Less" : "Show More"}
                    </button>
                    <span className={`${Stl.Show_More_Less_Span}`}>
                      <img
                        src={`/Images/Double-${
                          Show_More_Less ? "up" : "down"
                        }-chevron.png`}
                      ></img>
                    </span>
                  </div>
                </div>
              );
        })
      }
    </div>
  )
}

export default InstructorComponent

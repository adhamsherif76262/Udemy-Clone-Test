"use client"
import React, { useState } from "react";
import Rating from "./Rating"
import Styles from "../Courses/CarouselStyle.module.css"
import Stl from "../Courses/[CourseID]/CourseDetails.module.css";

function ReviewsComponent({CourseDetails , C }) {
    const [Show_More_Less, SetShow_More_Less] = useState(false);

  return (
    <div>
      <h2 className={`${Styles.ReviewsComponentHeaderH2}`}>
        <div className={`${Styles.ReviewsComponentHeaderDiv}`}>
          <Rating className="" rating={CourseDetails[C].Header.rate}></Rating>
          {CourseDetails[C].Header.rate}
          <span className="">Course Rating</span>
        </div>
        <div className={`${Styles.ReviewsComponentHeaderInnerDiv}`}>
          {CourseDetails[C].Header.numberOfRating} Ratings
        </div>
      </h2>
      <div className={`${Styles.ReviewsComponentOuterDiv}`}>
        {CourseDetails[C].reviews.map((Review, index) => {
          return index < 4 || Show_More_Less ? (
            <div className="" key={index}>
              <div className={`${Styles.ReviewsComponentDiv}`}>
                <div>
                  <img src={Review.img}></img>
                </div>
                <div className="">
                  <div className="">{Review.name}</div>
                  <div className={`${Styles.ReviewsComponentRateDiv}`}>
                    <Rating rating={Review.rate}></Rating>
                    <div className="">{Review.time}</div>
                  </div>
                </div>
              </div>
              <div className={`${Styles.ReviewsComponentCommentDiv}`}>
                {Review.comment}
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div
        className={`${Styles.Show_More_Less_Div}`}
        onClick={() => SetShow_More_Less(!Show_More_Less)}
      >
        <button className={`${Stl["Show_More_Less_Btn"]}`}>
          {Show_More_Less ? "Show Less" : "Show More"}
        </button>
        <span className={`${Stl.Show_More_Less_Span}`}>
          <img
            src={`/Images/Double-${Show_More_Less ? "up" : "down"}-chevron.png`}
          ></img>
        </span>
      </div>
    </div>
  );
}

export default ReviewsComponent

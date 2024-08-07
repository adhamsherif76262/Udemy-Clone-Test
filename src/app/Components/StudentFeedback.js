import React from 'react'
import Styles from "../Courses/CarouselStyle.module.css"
import Rating from "./Rating"
function StudentFeedback({CourseDetails , C}) {
  return (
    <div className={`${Styles.StudentFeedbackMotherDiv}`}>
      <h2 className={`${Styles.StudentFeedbackH2}`}>Students Feedback</h2>
      <div className={`${Styles.StudentFeedbackRatingDiv}`}>
        <Rating rating={CourseDetails[C].studentFeedback.totalRating}></Rating>
        <span className={`${Styles.StudentFeedbackRatingSpan}`}>
          {CourseDetails[C].studentFeedback.totalRating}
        </span>
      </div>

      <p className={`${Styles.StudentFeedbackRatingP}`}>
        {CourseDetails[C].studentFeedback.fiveStars}
        <span className={`${Styles.StudentFeedbackRatingInnerSpan}`}>Students gave Five Stars</span>
      </p>
      <p className={`${Styles.StudentFeedbackRatingP}`}>
        {CourseDetails[C].studentFeedback.fourStar}
        <span className={`${Styles.StudentFeedbackRatingInnerSpan}`}>Students gave Four Stars</span>
      </p>
      <p className={`${Styles.StudentFeedbackRatingP}`}>
        {CourseDetails[C].studentFeedback.threeStar}
        <span className={`${Styles.StudentFeedbackRatingInnerSpan}`}>Students gave Three Stars</span>
      </p>
      <p className={`${Styles.StudentFeedbackRatingP}`}>
        {CourseDetails[C].studentFeedback.twoStar}
        <span className={`${Styles.StudentFeedbackRatingInnerSpan}`}>Students gave Two Stars</span>
      </p>

      <p className={`${Styles.StudentFeedbackRatingP}`}>
        {CourseDetails[C].studentFeedback.oneStar}
        <span className={`${Styles.StudentFeedbackRatingInnerSpan}`}>Students gave one Star</span>
      </p>
    </div>
  );
}

export default StudentFeedback

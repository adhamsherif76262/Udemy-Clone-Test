"use client"
import React from 'react'
import Styles from "../Courses/[CourseID]/CourseDetails.module.css";
import Rating from "./Rating"

function HeaderContentComponent({ CourseDetails, C }) {

  const Offset = CourseDetails[C].id % 2 == 0 ? 4250 : 3300;
  
  function HandleClick(){
    window.scrollTo({ top: Offset, behavior: "smooth" });
            alert(window.innerHeight)
            alert(window.innerWidth);

  }

  return (
    <div className={`${Styles.HeaderDiv}`}>
      <div className={`${Styles.inner}`}>
        <span className={`${Styles.CoursePath}`}>
          {CourseDetails[C].Header.path[0]} &gt;
          {CourseDetails[C].Header.path[1]} &gt;
          {CourseDetails[C].Header.path[2]}
        </span>
        <h1 className="">{CourseDetails[C].Header.title}</h1>
        <p className={`${Styles.CourseDescription}`}>
          {CourseDetails[C].Header.Description}
        </p>
        <div className={`${Styles.CourseRating}`}>
          <span>{CourseDetails[C].Header.rate}</span>
          <Rating rating={CourseDetails[C].Header.rate}></Rating>
          
          <a onClick={HandleClick} className={`${Styles.CourseRatingSpan}`}>
            {CourseDetails[C].Header.numberOfRating} ratings
          </a>
          
          <span className="">{CourseDetails[C].Header.students} Students</span>
        </div>
        <p className=""> Created By {CourseDetails[C].Header.instructors}</p>
        <div className={`${Styles.CourseUpdate}`}>
          <div className="">
            <span className={`${Styles.CourseUpdateExclamation}`}>&#33;</span>
            <span className="">
              Last Updated {CourseDetails[C].Header.UpdateDate}
            </span>
          </div>

          <div className={`${Styles.CourseRatingSpan}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-globe"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
            </svg>
            <span className="">{CourseDetails[C].Header.language}</span>
          </div>

          <div className="">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="translate"
            >
              <path d="M17 20H2.5A2.503 2.503 0 0 1 0 17.5v-15C0 1.122 1.122 0 2.5 0h8a.5.5 0 0 1 .473.338l6.5 19A.502.502 0 0 1 17 20zM2.5 1C1.673 1 1 1.673 1 2.5v15c0 .827.673 1.5 1.5 1.5h13.8L10.143 1H2.5z" />
              <path d="M21.5 24h-8a.5.5 0 0 1-.468-.324l-1.5-4a.5.5 0 0 1 .936-.352L13.847 23H21.5c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5H12a.5.5 0 0 1 0-1h9.5C22.878 4 24 5.122 24 6.5v15c0 1.378-1.122 2.5-2.5 2.5z" />
              <path d="M13.5 24a.5.5 0 0 1-.376-.83l3.5-4a.5.5 0 1 1 .753.659l-3.5 4A.502.502 0 0 1 13.5 24zM9.5 14a.499.499 0 0 1-.471-.332L7 7.987l-2.029 5.681a.5.5 0 0 1-.942-.336l2.5-7c.142-.398.8-.398.941 0l2.5 7A.5.5 0 0 1 9.5 14z" />
              <path d="M8 11H6a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM21.5 11h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" />
              <path d="M17.5 11a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5zM16 17a.498.498 0 0 1-.29-.907c2.189-1.555 3.79-4.727 3.79-5.592a.5.5 0 0 1 1 0c0 1.318-1.927 4.785-4.21 6.408A.507.507 0 0 1 16 17z" />
              <path d="M20 18a.494.494 0 0 1-.337-.131c-.363-.332-3.558-3.283-4.126-4.681a.5.5 0 0 1 .926-.376c.409 1.007 2.936 3.459 3.875 4.319A.5.5 0 0 1 20 18z" />
            </svg>
            <span>English [Auto],&nbsp;Portuguese [Auto]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContentComponent


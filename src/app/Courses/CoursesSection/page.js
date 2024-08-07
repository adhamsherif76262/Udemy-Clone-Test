'use client';
import React from 'react'
import Styles from "../Courses.module.css"
import { useState, useEffect, useRef } from 'react';
import Carousel from "react-elastic-carousel";
import "../CarouselStyle.module.css";
import Rating from '../../Components/Rating';

function CoursesSection({CourseIntro}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  let TheCourse;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];
  // useEffect(() => {
  //   firstBtnRef.current.focus();
  // }, []);

  return (
    <>
      <article className={`${Styles.StaticCoursesContent}`}>
        <h1 className={`${Styles.M_Top}`}>A Broad Selection Of Courses</h1>
        <p className={`${Styles.M_Top}`}>
          Choose from over 220,000 online video courses with new additions
          published every month
        </p>
        {/* <div className={`${Styles.M_Top}`}>
          {CourseIntro.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`${Styles['Home_Tab']} ${Styles['M_Bottom']} ${selectedTab === index ? Styles.Bold : ""}`}
            >
              {item.TabName}
            </button>
          ))}
        </div> */}
      </article>
      {/* <div className={Styles.Courses_Mother_Div}>
        {CourseIntro.map((item, index) => (
          <div
            key={index}
            className={`${selectedTab === index ? "" : Styles.Hidden}`}
          >
            <h3 className={`${Styles.M_Top} ${Styles.CoursesH4}`}>
              {item.header}
            </h3>
            <p
              className={`${Styles.M_Top} ${Styles.CoursesH4} ${Styles.CourseDesc}`}
            >
              {item.description}
            </p>
            <button
              className={`${Styles.M_Top} ${Styles.ExploreBtn} ${Styles["M_Bottom"]} ${Styles.CoursesH4}`}
            >
              <a
                className={`${Styles.ExploreBtnAnchor}`}
                href={`https://www.udemy.com/topic/${item.urlkey}/`}
              >
                Explore {item.TabName}
              </a>
            </button>
            <h4
              className={`${Styles.CoursesH4} ${Styles["M_Top"]} ${Styles["M_Bottom"]}`}
            >
              {item.title}
            </h4>
            <div className="App">
              <Carousel breakPoints={breakPoints}>
                {item.courses.map((course, index) => (
                  <a
                    key={index}
                    href={`../../Courses/${course.id}`}
                    className={`${Styles.Slides} ${Styles.ExploreBtnAnchor}`}
                  >
                    <img
                      src={course.image}
                      className={`${Styles.carouselImg}`}
                    ></img>
                    <div className="">
                      <h5>{course.title}</h5>
                      {course.instructors.map((instructor, index) => (
                        <p key={index}>{instructor.name}</p>
                      ))}
                      <Rating rating={course.rating}></Rating>
                      <div>
                        <p class="Price">E&#163; {course.price}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default CoursesSection

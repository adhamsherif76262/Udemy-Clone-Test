import React from 'react'
import Styles from "../Courses/[CourseID]/CourseDetails.module.css";

function SideBarComponent({ CourseDetails, C }) {
  return (
    <div className={`${Styles.SidebarDiv}`}>
      <img
        src={CourseDetails[C].sidebar.Image}
        alt={CourseDetails[C].Header.title}
      ></img>
      <div className="">
        <span className="">Price :: {CourseDetails[C].sidebar.price}</span>
        <ul className={`${Styles.CourseUl}`}>
          <li className="">
            Money Back :: {CourseDetails[C].sidebar.moneyBack}
          </li>
          <li className="">
            Number of Downloads :: {CourseDetails[C].sidebar.downloads}
          </li>
          <li className="">
            Access period :: {CourseDetails[C].sidebar.lifeTimeAccess}
          </li>
          <li className="">Access Type :: {CourseDetails[C].sidebar.Access}</li>
          <li className="">
            Certification :: {CourseDetails[C].sidebar.certification}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarComponent

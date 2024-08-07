import React from 'react'
import axios from 'axios';
import CoursesSection from './CoursesSection/page';
async function Courses() {

  // const CourseIntroResponse = await axios.get(`http://localhost:5000/Array`)
    const courseIntro = CourseIntroResponse.data

    // const TabsResponse = await axios.get(`http://localhost:5000/HomePageTaps`)
    const Tabs = TabsResponse.data
    return (
      <>
        <CoursesSection  CourseIntro={courseIntro} TabNames = {Tabs}></CoursesSection>
    </>
  )
}

export default Courses

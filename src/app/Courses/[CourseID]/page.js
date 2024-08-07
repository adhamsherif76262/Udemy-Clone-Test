import React from 'react'
import axios from 'axios';
import HeaderNavBar from "../../Components/HeaderNavBar"
import Footer from "../../Components/Footer"
import HeaderContentComponent from '@/app/Components/HeaderContentComponent';
import CurriculumContent from "../../Components/CourseContent";
import DescriptoinComponent from '@/app/Components/DescriptoinComponent';
import LearningObjectivesComponent from '@/app/Components/LearningObjectivesComponent';
import RequirementsComponent from '@/app/Components/RequirementsComponent';
import SideBarComponent from '@/app/Components/SideBarComponent';
import InstructorComponent from '@/app/Components/InstructorComponent';
import StudentFeedback from '@/app/Components/StudentFeedback';
import ReviewsComponent from '@/app/Components/ReviewsComponent';
import Styles from "./CourseDetails.module.css"
import { Alert } from 'react-bootstrap';
async function CourseDetailPage({params}) {

    const CourseDetailsResponse = await axios.get(`http://localhost:5000/course`)
    const CourseDetails = CourseDetailsResponse.data
    let C,H;
    let innerContent;
    {params.CourseID % 2 == 0 ? C =1 : C =0;}
    {params.CourseID % 2 == 0 ? H = "100%" : H = "100%"}
    const CourseContentResponse = await axios.get(`http://localhost:5000/${C}`);
    const CourseContent = CourseContentResponse.data;

    {CourseContent.map((content)=>{
        {innerContent = content.sections.length;}
    })}
    // {window.innerHeight}
    // let H = `${documen.getElementById("Container_Div").scrollHeight} + " px";`
  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <SideBarComponent CourseDetails={CourseDetails} C={C}></SideBarComponent>
      <HeaderContentComponent
        CourseDetails={CourseDetails}
        C={C}
      ></HeaderContentComponent>
      <div className={`${Styles.ContainerDiv}`} id='Container_Div' style={{height : "H"}}>
        <LearningObjectivesComponent
          CourseDetails={CourseDetails}
          C={C}
        ></LearningObjectivesComponent>
        <CurriculumContent
          CourseContent={CourseContent}
          content={innerContent}
        ></CurriculumContent>
        <RequirementsComponent
          CourseDetails={CourseDetails}
          C={C}
        ></RequirementsComponent>
        <DescriptoinComponent
          CourseDetails={CourseDetails}
          C={C}
        ></DescriptoinComponent>
        <InstructorComponent
          CourseDetails={CourseDetails}
          C={C}
        ></InstructorComponent>
        <StudentFeedback CourseDetails={CourseDetails} C={C}></StudentFeedback>
        <ReviewsComponent
          CourseDetails={CourseDetails}
          C={C}
        ></ReviewsComponent>
      </div>
        <Footer></Footer>
    </>
  );
}

export default CourseDetailPage

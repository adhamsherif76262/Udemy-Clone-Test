"use client"
import Styles from "../Courses/CourseContent.module.css"
import * as React from "react";
import { useState } from "react";
import "../Courses/styles.scss";
import Block from "./Block";

function CurriculumContent({CourseContent ,content}) {

      const [MoreAccordionSections, SetMoreAccordionSections] = useState(false);
      const [Expand_Collapse, SetExpand_Collapse] = useState("Expand All");
      const [AccordionDetailsDesc, SetAccordionDetailsDesc] = useState(false);
      const initialState = [true];
      const [state, dispatch] = React.useReducer(reducer, initialState);
      
      function reducer(state, { type, index }) {
        let ExpandArr = new Array(content).fill(true);
        let CollapseArr = new Array(content).fill(false);
        switch (type) {
          case "Expand All":
            return ExpandArr;
          case "Collapse All":
            return CollapseArr;
          case "toggle":
            let newState = [...state];
            newState[index] = !newState[index];
            return newState;

          default:
            throw new Error("reducer configuration");
        }
      }

      function HandleClick(Expand_Collapse){

        if(Expand_Collapse === "Expand All"){
          SetExpand_Collapse("Collapse All");
          SetMoreAccordionSections(!MoreAccordionSections);
          dispatch({ type: "Expand All" });
          
        }else{
          SetExpand_Collapse("Expand All")
          dispatch({ type: "Collapse All" });
            }
      }
      
      return (
        <>
          <h2 className={`${Styles.CourseContentH2}`}>Course Content</h2>
          <div className={`${Styles.CourseContentDiv}`}>
            {CourseContent.map((content, index1) => (
              <div key={index1} className="">
                <>
                  <div className="">
                    {content.sections.map((Course, index2) => (
                      <>
                        <div className="" key={index2}>
                          <div
                            className={`${Styles.CourseContentHeaderOuterDiv}`}
                          >
                            {
                              index2 ==0 ? (
                                <div
                              className={`${Styles.CourseContentHeaderMotherDiv}`}
                            >
                              <div
                                className={`${Styles.CourseContentHeaderDiv}`}
                              >
                                <div>{content.sections.length} </div>
                                <span className={`${Styles.CourseContentHeaderSpan}`}>Sections</span>
                              </div>

                              <div
                                className={`${Styles.CourseContentHeaderDiv}`}
                              >
                                <div className={`${Styles.CourseContentHeaderSpan}`}>{content.num_of_published_lectures} </div>
                                <span className={`${Styles.CourseContentHeaderSpan}`}>Lectures</span>
                              </div>

                              <div
                                className={`${Styles.CourseContentHeaderDiv}`}
                              >
                                <div className={`${Styles.CourseContentHeaderSpan}`}>
                                  {content.estimated_content_length_text}
                                </div>
                                <span className={`${Styles.CourseContentHeaderSpan}`}>Total Length</span>
                              </div>
                            </div>
                              ):""
                            }

                            <div className="">
                              {index2 == 0 ? (
                                <header>
                                  <button
                                    onClick={() => HandleClick(Expand_Collapse)}
                                  >
                                    {Expand_Collapse}
                                  </button>
                                </header>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          {index2 < 10 || MoreAccordionSections ? (
                            <div>
                              <Block
                                Course={Course}
                                title={
                                  <div className={`${Styles.AccordionTitle}`}>
                                    <div className="">{Course.title}</div>
                                  </div>
                                }
                                // isOpen={index2 ==0 ? true : state[index2]}
                                isOpen={state[index2]}
                                onToggle={() =>
                                  dispatch({ type: "toggle", index: index2 })
                                }
                              >
                                <div className="content">
                                  {Course.items.map((item, index3) => (
                                    <div
                                      key={index3}
                                      className={`${Styles.LecturesDiv}`}
                                    >
                                      <div className="">
                                        {item.title}
                                        <span
                                          className={`${Styles.LectureDescriptionBtn}`}
                                        >
                                          {item.description.length > 0 ? (
                                            <span
                                              onClick={() =>
                                                SetAccordionDetailsDesc(
                                                  !AccordionDetailsDesc
                                                )
                                              }
                                            >
                                              <img
                                                src={`/Images/Double-${
                                                  AccordionDetailsDesc &&
                                                  index3 + 1
                                                    ? "up"
                                                    : "down"
                                                }-chevron.png`}
                                              ></img>
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </span>

                                        <span
                                          className={`${Styles.LectureSummaryMotherDiv}`}
                                        >
                                          <span className="">
                                            {item.can_be_previewed ? (
                                              <a
                                                href={`https://www.udemy.com${item.preview_url}`}
                                              >
                                                Prieview
                                              </a>
                                            ) : (
                                              ""
                                            )}
                                          </span>
                                          <span
                                            className={`${Styles.LectureSummaryDiv}`}
                                          >
                                            {item.content_summary}
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        className={`${Styles.LecturesDescriptionMotherDiv}`}
                                      >
                                        {item.description.length > 0 ? (
                                          <div>
                                            {AccordionDetailsDesc &&
                                            index3 + 1 ? (
                                              <div
                                                className={`${Styles.LectureDescriptionDiv}`}
                                              >
                                                {item.description}
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Block>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                    ))}
                    <button
                      onClick={() =>
                        SetMoreAccordionSections(!MoreAccordionSections)
                      }
                      className={`${Styles.MoreSectionsBtn} ${
                        Expand_Collapse === "Collapse All" ? Styles.D_None : ""
                      }`}
                    >
                      {`Show ${content.sections.length - 10} 
                    ${!MoreAccordionSections ? "More" : "Less"} Sections`}
                    </button>
                  </div>
                </>
              </div>
            ))}
          </div>
        </>
      );
}
export default CurriculumContent

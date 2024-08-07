import React from 'react'
import Styles from "../Home.module.css"
function TopCategoriesSection() {
  return (
    <section className={Styles.Top_Categories_Section}>

        <div className={Styles.Top_Categories_Div_H2}>
            <h2>Top Categories</h2>
        </div>

        <div className={Styles.Top_Categories_Div}>
            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/design/" className="">
                        <img src="/Images/Design_Top_category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Design</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/development/">
                        <img src="/Images/Development_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Development</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/marketing/">
                        <img src="/Images/Marketking_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Marketing</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/it-and-software/">
                        <img src="/Images/IT_&_Software_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >IT & Software</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/personal-development/">
                        <img src="/Images/Personal_Development_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Personal Development</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/business/">
                        <img src="/Images/Buisiness_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Business</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/photography/">
                        <img src="/Images/Photography_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Photography</h3>
            </article>

            <article className={Styles.Top_Categories_Article}>
                <div className={Styles.Top_Categories_Card}>
                    <a href="https://www.udemy.com/courses/music/">
                        <img src="/Images/Music_Top_Category_Image.png" alt="" loading="eager"></img>
                    </a>
                </div>
                <h3 >Music</h3>
            </article>
        </div>
    </section>
  )
}

export default TopCategoriesSection

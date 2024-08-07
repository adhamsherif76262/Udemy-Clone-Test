import React from 'react'
import Styles from "../Home.module.css"
function SalesSection() {
  return (
    <section className={`${Styles['Sale_Section']}`}>

        <div className={`${Styles['Sales_Div']}`}>
            <h1 className={`${Styles['h1']}`}>Sale ends today</h1>
            <p className={`${Styles['Sales_P']}`}>Start exploring new possibilities for your future. Learn from just E£199.99 now.</p>
        </div>
        <img className={`${Styles['Sale_Img']}`} alt="" src="Images/Sale_Img.jpg" loading="eager"></img>
        <img className={`${Styles['Sale_Img_2']}`} alt="" src="Images/Sale_Img_2.jpg" loading="eager"></img>
        <button type="button" className={`${Styles['Hidden']}`}>
            <span>What do you want to learn?</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </button>
    </section>
  )
}

export default SalesSection

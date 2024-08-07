"use client"
import React from 'react'
import Styles from "../page.module.css";

function Footer() {

    function HandleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
<div>
    <div className={Styles.Footer_Upper}>
        <ul className={Styles.Footer_ul}>
            <li>
                <a className={Styles.Footer_anchor} href="/" target="_blank" rel="noopener">Udemy Business</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="/">Teach on Udemy</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="/" target="_blank" rel="noopener noreferrer">Get the app</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="https://about.udemy.com/?locale=en-us">About us</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="https://about.udemy.com/company?locale=en-us#offices">Contact us</a>
            </li>
        </ul>

        <ul className={Styles.Footer_ul}>
        <li>
            <a className={Styles.Footer_anchor} href="https://about.udemy.com/careers?locale=en-us">Careers</a>


        </li>
        <li>
            <a className={Styles.Footer_anchor} href="https://blog.udemy.com/?ref=footer">Blog</a>
        </li>
        <li>
            <a className={Styles.Footer_anchor} href="/">Help and Support</a>
        </li>
        <li>
            <a className={Styles.Footer_anchor} href="/">Affiliate</a>
         </li>
        <li>
            <a className={Styles.Footer_anchor} href="https://investors.udemy.com">Investors</a>
        </li>
        </ul>
            <ul className={Styles.Footer_ul}>
            <li>
                <a className={Styles.Footer_anchor} href="/">Terms</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="/">Privacy policy</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="/">
                    <span>Cookie settings</span>
                </a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="/">Sitemap</a>
            </li>
            <li>
                <a className={Styles.Footer_anchor} href="https://about.udemy.com/accessibility-statement?locale=en-us">Accessibility statement</a>
                </li>
            </ul>

            <div >
                <button type="button" className={Styles.Footer_Button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                     viewBox="0 0 24 24" role="img" aria-labelledby="languageIconTitle" 
                     stroke="#ffffff" stroke-width="1" stroke-linecap="square" 
                     stroke-linejoin="miter" fill="none" color="#ffffff" style={{"color":"white"}}>
                         <title id="languageIconTitle">Language</title>
                        <circle cx="12" cy="12" r="10"/>
                        <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/>
                        <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> 
                    </svg>
                    <span>English</span>
                </button>
            </div>
    </div>

    <div className={Styles.Footer_Lower}>
        <div className={Styles.Footer_Logo}>
            <a className={Styles.Footer_anchor} href="/" >
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Udemy-Logo" width="91" height="34"></img>
            </a>
        </div>
        <div className={Styles.Copyright}>© 2024 Udemy, Inc.</div>
        <button onClick={HandleClick} className={Styles.Footer_Top_Button}>
            Top
        </button>
    </div>
</div>

  )
}

export default Footer




{/* <footer>

</footer> */}
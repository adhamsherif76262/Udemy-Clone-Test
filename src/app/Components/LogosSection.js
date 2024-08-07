import React from 'react'
import Styles from "../Home.module.css"
function LogosSection() {
  return (
    <section className={`${Styles['partner_logos']}`}>
        <h3 className={`${Styles['Logos_H3']}`}>Trusted by over 15,000 companies and millions of learners around the world</h3>
        <div className={`${Styles['Logos_Img_Containter']}`}>
            <img className={`${Styles.Img_Logos_Squared}`} src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
                alt="Volkswagen logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Rectangled}`} src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
                alt="Samsung logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Rectangled}`} src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
                alt="Cisco logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Rectangled}`} src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
                alt="ATT&amp;T logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Squared}`} src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
                alt="Proctamp; Gamble logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Rectangled}`}
                src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
                alt="Hewlett Packard Enterprise logo" loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Squared}`} src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="Citi logo"
                loading="lazy"></img>
            <img className={`${Styles.Img_Logos_Squared}`} src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
                alt="Ericsson logo" loading="lazy"></img>
        </div>
    </section>
  )
}

export default LogosSection

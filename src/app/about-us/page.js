import AboutCompany from '@/components/About/AboutCompany'
import OurImpact from '@/components/Home/OurImpact'
import InnerpageHeader from '@/components/general/InnerpageHeader'
import { aboutData } from '@/data/aboutData'
import React from 'react'

const Index = () => {
  return (
    <div className='about-page'>
      <InnerpageHeader pagetitle="About Us"/>
      <AboutCompany data={aboutData}/>
      <OurImpact />
    </div>
  )
}

export default Index

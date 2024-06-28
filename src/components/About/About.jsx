import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>

        </div>
        <div className="about-right">
            <h3>About Universty</h3>
            <h2>Nurturing Tommarow's Leaders Today</h2>
            <p>we are committed to providing an exceptional education that combines rigorous academic programs with hands-on experiences.
            </p>
            <p>Our diverse and inclusive community fosters personal and professional growth, preparing students to become leaders in their fields. With state-of-the-art facilities and a dedicated faculty, we ensure a transformative journey for every student.
            </p>
            <p>Students at Edusity benefit from a vibrant campus life, engaging in various extracurricular activities, research opportunities.
            </p>

        </div>
      
    </div>
  )
}

export default About

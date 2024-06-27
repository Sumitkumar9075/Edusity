import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />

        </div>
        <div className="about-right">
            <h3>About Universty</h3>
            <h2>Nurturing Tommarow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt voluptate praesentium consequatur eveniet magnam quaerat quis blanditiis odit officia omnis molestias, aspernatur id autem? Quod eveniet atque dolorum sit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt voluptate praesentium consequatur eveniet magnam quaerat quis blanditiis odit officia omnis molestias, aspernatur id autem? Quod eveniet atque dolorum sit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt voluptate praesentium consequatur eveniet magnam quaerat quis blanditiis odit officia omnis molestias, aspernatur id autem? Quod eveniet atque dolorum sit.
            </p>

        </div>
      
    </div>
  )
}

export default About

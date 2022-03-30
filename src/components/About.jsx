import React from 'react'
import { NavLink } from 'react-router-dom';
import AboutImage from '../assets/about.png';

const About = () => {
  return (
    <div>
      <div className='container py-4 my-4'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <NavLink className="btn btn-outline-primary px-3" to="/contact">Contact Us</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src={AboutImage} alt="About-us" height="300px" width="300px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import imageTen from '../images/imageTen.jpg'

const About = () => {
  return (
    <div className='about-overall-container'>
    <h2 className='text-center pt-5'>About Us</h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-2'>
            <img src={imageTen} alt="about-us" />
        </div>
        <div className='about-text-container m-2'>
            <h4>What We Are About</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laborum sint dignissimos ducimus voluptatibus quas sapiente inventore possimus alias distinctio illum natus vitae deleniti ea tempora, qui, eaque iusto asperiores?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laborum sint dignissimos ducimus voluptatibus quas sapiente inventore possimus alias distinctio illum natus vitae deleniti ea tempora, qui, eaque iusto asperiores?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laborum sint dignissimos ducimus voluptatibus quas sapiente inventore possimus alias distinctio illum natus vitae deleniti ea tempora, qui, eaque iusto asperiores?
            </p>
            
        </div>
      </div>
    </div>
  )
}

export default About

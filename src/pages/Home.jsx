import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageEight from '../images/imageEight.png'
import imageNine from '../images/imageNine.jpg'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Services titleOne="Ticketing" titleTwo="Hotel Reservation" titleThree="Flight Booking" imageFour={imageFour} imageFive={imageFive} imageSix={imageSix} title="Our Services" left="fade-down-right" center="fade-down" right="fade-down-left"/>
        <Services titleOne="Reviews" titleTwo="Complaints" titleThree="Branches" imageFour={imageSeven} imageFive={imageEight} imageSix={imageNine} left="fade-up-right" center="fade-up" right="fade-up-left"/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home

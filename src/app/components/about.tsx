import React from 'react'
import Image from 'next/image'
import logo2 from '../../../public/assests/picture/logo2.jpg'
const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div
  data-aos="fade-right"
  data-aos-duration = '1000'
  data-aos-easing="ease-in-sine"
   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image 
        src={logo2}
        className="object-cover object-center rounded" width={400} alt="hero" />
      </div>
    <div 
    data-aos="fade-left"
    data-aos-duration = '1000'
    data-aos-easing="ease-in-sine"
    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About me
        {/* <br className="hidden lg:inline-block">readymade gluten </> */}
      </h1>
      <p className="mb-5 leading-relaxed">I have done Masters degree in Economics from the University of Karachi,I am also an online teacher of html css js, I have good command in frontend developer, I&rsquo;m currently building my skills as a frontend developer, with a solid foundation in HTML, CSS, and JavaScript. I&rsquo;ve also expanded my knowledge by learning TypeScript and modern frameworks like React and Next.js, enabling me to create dynamic, scalable, and responsive web applications.</p>
      <div className="flex justify-center">
        <a href="/cv.pdf" download>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download CV</button>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
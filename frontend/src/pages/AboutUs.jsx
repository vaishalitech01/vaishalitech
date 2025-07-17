// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/about_imgs/bg1.jpg'
import bg2 from '../assets/about_imgs/bg2.jpg'
import linkedin from '../assets/about_imgs/linkedin.png'
import profile from '../assets/about_imgs/profile.png'

const AboutUs = () => {
   return (
    <>
      <section className='bg-[#001434]'>

        <section className='w-full lg:h-[25rem] md:h-[10rem] h-[6rem] flex justify-center items-center bg-center bg-cover mt-13 md:mt-10 lg:mt-0' style={{ backgroundImage: `url(${bg1})` }}>
          <span className='md:text-6xl text-2xl font-semibold text-center text-white'>About us</span>
        </section>


<section className='w-full flex md:flex-row flex-col justify-evenly lg:px-24 px-8 py-6 gap-5 items-start m-auto bg-[#2F4670]'>
  {[
    {
      title: 'Vision',
      content: `To become the most trusted digital partner for businesses worldwide by delivering innovative, customized, and client-first solutions that accelerate growth and create lasting online success.`
    },
    {
      title: 'Mission',
      content: `At VaishaliTech, our mission is to empower every client with digital solutions that are tailored to their unique needs, goals, and challenges.\n\nWe combine technology, creativity, and strategy to deliver meaningful outcomes — whether it’s building a standout online presence, improving customer engagement, or driving measurable business growth.`
    },
    {
      title: 'Culture',
      content: `At VaishaliTech, we believe in building genuine, long-term relationships with our clients. Our culture is rooted in trust, transparency, and teamwork — both within our team and with those we serve.`
    }
  ].map((item, index) => (
    <div
      key={index}
      className='lg:h-[25rem] md:h-[20rem] h-auto md:w-[25vw] lg:w-[25vw] lg:px-4 flex flex-col items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)] p-4'
    >
      <div className='w-full flex flex-col items-center'>
        <span className='md:text-2xl lg:text-4xl text-xl font-semibold text-center text-white'>
          {item.title}
        </span>
        <p className='lg:text-xl text-xs text-center mt-4 font-medium text-white whitespace-pre-line'>
          {item.content}
        </p>
      </div>
    </div>
  ))}
</section>




        <section className='w-full space-y-5 md:space-y-0 lg:h-[45rem] md:h-[21rem] h-[14rem] flex flex-col   m-auto bg-cover' style={{ backgroundImage: `url(${bg2})`}}>
          <div className='bg-[#001434] w-[70vw] lg:w-[70vw] lg:h-[15rem] md:w-[70vw] md:h-[8rem] h-[4rem] lg:mt-[13%] md:mt-[12%] mt-[20%]'>
            <div className='w-full h-full  xl:px-18 xl:py-16 md:px-5 md:py-6 px-8 py-4 bg-[#4E6185]/70 '>
              <h3 className='lg:text-5xl md:text-3xl text-xs font-bold text-center text-white'>"To empower businesses with cutting-edge digital solutions."</h3>
            </div>
          </div>
<Link to="/contact-us" className='text-white md:text-2xl text-xs bg-[#880E4F] md:p-3 p-1.5 md:w-[20rem] lg:mt-36 md:mt-10 justify-center items-center m-auto rounded-xl text-center flex'>
  Explore our solution
</Link>
        </section>

        <section className='w-full md:h-[80rem] border-white-2 px-6 py-10 flex justify-center items-center m-auto bg-[linear-gradient(180deg,rgba(0,20,52,1)_55%,rgba(0,0,0,1)_100%)]'>

          <div className='md:w-[44rem] flex flex-col m-auto justify-center items-center'>
            <div className='md:h-[36.8rem] h-[22rem] md:w-[31.5rem] w-[17rem] bg-[linear-gradient(180deg,rgba(18,23,31,1)_78%,rgba(45,54,70,1)_100%)] rounded-4xl flex flex-col justify-center items-center transition-transform duration-500 transform hover:rotate-10'>
              <img src={profile} alt="" className='md:w-[27.4rem] md:h-[23rem] h-[10rem] border-amber-100' />
              <span className='md:text-4xl text-2xl text-white mt-5'>Abhishek Kumar</span>
              <span className='md:text-xl text-sm text-white mt-3'>Founder & CEO</span>
              <span className='md:text-3xl text-xl text-white mt-3'>Vaishalitech</span>
              <img src={linkedin} alt="linkedin logo" className='h-7 mt-3' />
            </div>

            <span className='md:text-4xl text-2xl text-white font-extralight text-center mt-10'>A Message from Our CEO</span>
            <p className='md:text-2xl text-white font-extralight text-center mt-10'>"Technology companies like VaishaliTech don't just build solutions we shape the future. Every line of code, every design, and every strategy we create Impacts businesses, communities, and the digital landscape at large. But our responsibility doesn't stop there. We're committed to actions that uplift local economies, foster inclusivity, and reduce our environmental footprint because progress should benefit everyone, everywhere.</p>

            <p className='md:text-2xl text-white font-extralight text-center mt-10'>Through sustainable practices, ethical innovation, and partnerships that matter, we're not just delivering technology; we're building a legacy of positive change. Together, let's make the digital world a force for good."</p>

            <p className='md:text-2xl text-[#767A81] text-center font-extraligh mt-10'>-Abhishek Kumar, Founder and CEO, Vaishalitech.</p>
          </div>
        </section>

      </section>

    </>
  )
};

export default AboutUs;

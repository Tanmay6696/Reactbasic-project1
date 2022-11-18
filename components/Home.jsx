import React from 'react';
import companyLogo from '../asstes/Dsa image.png';
import Pic1 from '../asstes/pic1.webp';
import Pic2 from '../asstes/pic2.jpeg';
import companyLogo1 from '../asstes/html-css.png';
//import companyLogo2 from '../asstes/JavaScript.png';
//import companyLogo3 from '../asstes/Dsa image.png';
//import vg from "../asstes/main1";
const Home = () => {
  return (
    <>
      <div id="top-section" >
        <div id="top-content" >
            <h1> Welcome to our index Page</h1>
            <p> we are bound to server the people interest & you would love my website </p>
        </div>
      </div>
      <div id="feature-section">
        <h1>Awesome is an amazing landing page bought to you on everyones favourite learning platform,Udemy.
                    imagine what is next.</h1>
        <div className="feature-content">
            <div className="col-3">
              <img  src={companyLogo} width="160" height="160"  alt="BigCo Inc. logo"/>                       
                <h3>Data structure & algorithum </h3>
                <p>Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package of video lectures, practice problems, quizzes, discussion forums and contests. Start Today!.</p>
                <button type="button" className="btn btn-success">enroll</button>
            </div>
            <div className="col-3">
              <img src={companyLogo1} width="160" height="160" alt="BigCo Inc. logo"/>
                <h3>HTML &CSS</h3>
                <p>Looking to build a career in Web Development? Master these advanced HTML concepts to get started! This self-paced course will teach you everything from basics to even adding files, iFrames & more. Also includes 10 real-world projects.</p>
                <button type="button" className="btn btn-success">enroll</button>
            </div>
            <div className="col-3">
              <img src={companyLogo1} width="160" height="160" alt="BigCo Inc. logo"/>
                <h3>Java Script</h3>
                <p>Master the world of Front-End development with this Advanced JavaScript - Self Paced Course. Along with JS Foundations, you will also master advanced concepts. Also includes Interview problem set for all-round preparation.</p>
                <button type="button" className="btn btn-success">enroll</button>
            </div>
        </div>         
      </div>
      <div className='home2' id="Home2">
        <div id="showcasemain">
          <div className="showcaseimg">
              <img  src={Pic1}  alt="BigCo Inc. logo"/>                    
          </div>
          <div className="showcasedata">
              <h1 > Lets start Coding</h1>
              <p ><h5>If your goal is to learn to code as quickly as possible, you can become proficient in as little as 3 months. If you're looking to change careers, then you can become proficient in coding for web development or data science in 3 months or more through a coding bootcamp or self-teaching</h5></p>
          </div>
        </div>
        <div id="showcasemain2">
          <div className="showcaseimg2" height="600" width="400">
              <img  src={Pic2}  alt="BigCo Inc. logo"/>
          </div>
          <div className="showcasedata2">
              <h1 > Lets start Coding</h1>
              <p ><h5>If your goal is to learn to code as quickly as possible, you can become proficient in as little as 3 months. If you're looking to change careers, then you can become proficient in coding for web development or data science in 3 months or more through a coding bootcamp or self-teaching</h5></p>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Home

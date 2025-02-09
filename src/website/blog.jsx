import React, { useState , useEffect} from 'react';
import './blog.css'
import { useNavigate } from "react-router-dom";
import KITBanner from '../assets/KIT-Banner.JPG';
import RecentPost from '../assets/office-reception.JPG';
import CEOCabin from '../assets/CEO-Cabin.JPG';
import God from '../assets/God-Pooja.JPG';
import teamPicture from '../assets/TeamPicture.JPG';
import cakeCutting from '../assets/CEO-Work.JPG';
import rangoli from '../assets/Rangoli.JPG';
import fam from '../assets/CEO-family.jpg';
import team from '../assets/Team-Opening.JPG';
import cake from '../assets/Cake.JPG';
import doorOpening from '../assets/Door-Opening.JPG';
import Carousel from "@itseasy21/react-elastic-carousel";

function Blog(props) {
  const date = new Date();
  var dateInfo = date.toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric',hour12:true,hour:'numeric',minute:'numeric'});
  var readMore = ()=>{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreContent");
    var btnText = document.getElementById("readMoreBtn");
    if (dots.style.display === "none" && moreText.style.display == "inline") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  
  }
  useEffect(() => {
   window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bdiv">
        <div className="bdiv-9">
          <div className="bdiv-10 col-10 d-flex">
            <div className="bcolumn col-8">
              <div className="bdiv-11">
               <Carousel  itemsToShow={1} showArrows={true} pagination={false} >  
                  <div>
                    <img className="d-block w-100"
                      src={KITBanner}
                    />
                  </div>
                  <div>
                    <img className="d-block w-100"
                    src={CEOCabin}
                    />
                  </div>
                  <div>
                    <img className="d-block w-100"
                      src={teamPicture}
                    />
                  </div>
                  <div>
                    <img className="d-block w-100"
                      src={doorOpening}
                    />
                  </div>
                </Carousel>
                <div className="bdiv-12 mt-4">
                  <i class="fa-regular fa-clock time_clock"></i>
                  <div className="bdiv-13">
                  {dateInfo} - Latest News
                  </div>
                </div>
                <div className="bdiv-15">
                  <span className='fw-bold fa-2x my-2'>Overview</span>
                  <p className='mt-3'>
                    At KIT, we are dedicated to providing top-notch IT services tailored to 
                    meet your unique business needs. With a team of experienced professionals, 
                    we offer a wide range of technology solutions, from network and infrastructure 
                    management to cybersecurity and cloud computing. Our mission is to empower your 
                    organization with the latest in digital innovation, ensuring seamless operations, 
                    enhanced productivity, and robust data security. Partner with us to unlock 
                    the full potential of technology for your business.
                    <span id="dots">...</span><br/>
                    <div id="moreContent" style={{display:'none'}}>
                    To be the leading force in shaping the future of information and technology, K.I.T Global Technologies 
                    Pvt Ltd envisions a world where seamless connectivity, advanced analytics, and intelligent automation 
                    redefine possibilities. We aspire to be at the forefront of technological innovation, creating solutions
                    that not only address current challenges but also anticipate and shape the evolving needs of our clients.
                      Through our commitment to sustainability, inclusivity, and excellence, we aim to be a catalyst for 
                      positive transformations in the global digital ecosystem.
                    </div>
                  </p>
                </div>
             </div>
                <button className='blogdiv-button btnRead' id="readMoreBtn" color="inherit" onClick={readMore}>Read More</button>
            </div> 
            <div className="bcolumn-2">
              <div className="bdiv-17">
              <div className="bdiv-21 mx-2 px-4 recent1 ">
                  <div className="bdiv-22 fw-bold fs-5 mt-3">Recent Post</div> 
                  <hr className='mt-3 mb-4'/>
                  <div className="d-flex w-100 flex-column">
                 <img
                      loading="lazy"
                      srcSet={RecentPost}
                      className="d-flex w-95 mb-2 height"
                    />
                    <div className="mx-1 my-3">
                      <div className="bdiv-26 fw-bold mb-2">
                        Glimse of Office Inaguaration Day
                        Team Picture
                        CEO with the employees
                      </div>
                      <div className="bdiv-27 update">
                        Updated: 6 January 2023 15:35 IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bdiv-34">
          <div className="bdiv-35">
            <div className="d-flex justify-content-around mainFlex">
             <div className='flexAlign'>
                <img loading="lazy" srcset={God} className='first'/>
               <div className='align mt-4'>
                 Satya Narayan Pooja conducted
                  in office structuring process
                  by our CEO Sandeep Banavasi and his parents
               </div>
              </div> 
              <div className='flexAlign'>
                <img loading="lazy" srcset={cakeCutting} className='first'/>
                <div className='align mt-4'>
                  CEO in his office Cabin on
                  discussion with Clients
                  meetings and Team members
                </div> 
              </div> 
              <div className='flexAlign'>
                  <img loading="lazy" srcSet={rangoli} className='first' />
                  <div className="bdiv-46">
                    <div className='align mt-4'>
                      The art of decoration drawn on the floor. 
                      Intended to welcome Lakshmi,
                      the goddess of wealth and good luck.
                    </div> 
               </div>
                </div>
           </div>
          </div> 
          <div className="bdiv-49">
            <div className="d-flex justify-content-around mainFlex">
              <div className="bcolumn-6">
              <div className='flexAlign'>
                <img loading="lazy" srcSet={fam} className='first' /> 
                  <div className='align mt-4'>
                      CEO Entering the office with family.
                    </div> 
            </div>
              </div> 
              <div className="bcolumn-7">
                <div className='flexAlign'>
                  <img loading="lazy" srcSet={team} className='first' /> 
                  <div className="bdiv-56">
                    <div className='align mt-4'>
                      CEO at office with team members.
                    </div> 
                </div>
                </div>
              </div> 
              <div className="bcolumn-8">
                <div className='flexAlign'>
                  <img loading="lazy" srcSet={cake} className='first'/> 
                  <div className="bdiv-60">
                    <div className='align mt-4'>
                      Cake Cutting ceremony on the day of inauguration.
                    </div> 
                </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </>
  );

}
export default Blog;

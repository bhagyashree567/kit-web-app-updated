import * as React from "react";
import './homePage.css';
import Carousel from "@itseasy21/react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import whychooseus from '../assets/whyChoseUs.jpg';
import landingimg from '../assets/what-client-says.png'
import landingimg2 from '../assets/Vector.png'
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';


const data= [
  {
    id:'1',
    logo:client1,
    head:'Design Rank Impress',
    description:"KIT embodies an extraordinary fusion of professionalism and approachability, leaving us thoroughly delighted with the exceptional work.",
  },
  {
    id:'2',
    logo:client2,
    head:'Soar with SEO',
    description:"We are truly delighted to collaborate with the team. Their exceptional expertise and professionalism have truly distinguished them.",
  },
  {
    id:'3',
    logo:client3,
    head:'Outdated to Outstanding',
    description:"We've just finalized a website redesign, reasonably priced. Now boasting a sleek, modern design, we anticipate increased business engagement.",
  },
  {
    id:'4',
    logo:client4,
    head:'Engage, Boost, Succeed',
    description:"From the inaugural consultation, KIT adeptly discerned our requirements, delivering professional-grade results that surpassed expectations."
  },
  {
    id:'5',
    logo:client5,
    head: 'Co-ordination at the best',
    description:"Mr. Sandeep Banavasi serves as the cornerstone of the company, providing strategic direction, making pivotal corporate decisions of the organization."
  }
];
function HomePage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    if(document.getElementsByClassName('rec-arrow')[0]){
      document.getElementsByClassName('rec-arrow')[0].innerText = '';
      document.getElementsByClassName('rec-arrow-right')[0].innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      document.getElementsByClassName('rec-arrow-left')[0].innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    }
  }, []);


  return (
    

  <>
 <div className=" container-fluid sections-container w-100">
    
    {/* <div className="d-flex flex-column "> */}
      {/*#############--------------  section 1 --------------#################*/}
      <div className="row">
        <section className=" mb-4 mt-5 pt-5 row">
          <div className="p-0 col text-start"> 
          {/* designers-developers-animation-container */}
            <div >
              <div className="homediv-13">
                      <div className="fs-5 fw-bold homediv-14">We Are</div>
                      <div className="container">
                          <div className="fs-3 fw-bold homediv-15" style={{color:"#0A161C"}}>Creator's </div>
                          <div className="fs-3 fw-bold homediv-15">Designer's </div>
                          <div className="fs-3 fw-bold homediv-15" style={{color:"#042636"}}>Developer's </div>     
                      </div>
              </div> 
              <div className="d-flex flex-column homediv-16 mt-4">
                      Your trusted partner in IT services and solutions. With a
                      passion for technology and a commitment to excellence, we
                      have been providing cutting-edge IT services to business.
                      <button className='get-started-button mt-5' onClick={()=> navigate('/services')}>Get Started</button>
              </div>
              <div className="w-100">
                  <img  loading="lazy" className="landing-page-img2 w-100" src={landingimg2} alt="" />
              </div>
            </div>
          </div>
          
          <div className="landing-page-img-container mt-5 col ">
            <img  loading="lazy" className="landingimg " src={landingimg} alt="" />
          </div>
        </section>
        </div>

        {/* /*#############--------------  section 2 --------------################# */}
        <div className="row">
        <section className="why-choose-us-section d-flex justify-content-between row align-items-center">
          <div className="col-sm h-auto why-choose-img-container ">
            <img loading="lazy" className="mx-5 why-choose-us-img " src={whychooseus} alt="image"/>
          </div>

          <div className="col">
          <div className="my-4 why-choose-us-text-container">
            <h3 className="text-center">Why Choose Us?</h3>
            {/* d-flex fs-3 justify-content-center mt-4 */}
            <ul className="fs-5 my-2">
              <li>We Design product requirements from clients considering time and budget Constraints, Design modularity and product robustness.</li>
              <li>We have a proven methodology, We’ve developed and refined our
                  methods over many years, so you can expect our services and projects to be delivered consistently.
                  Our numerous years of experience have always made us aware and considerate in putting our best
                  foot forward during the work process so our clients can get the best.</li>
              <li>We listen, suggest, and update. We understand that although there are common themes,
                  each business is different and has its own special needs.</li>
              <li>We are providing reliable and user friendly services, maintenance, updating, repairs and fix issues in software.</li>
              <li>We prioritise your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.</li>
            </ul>
          </div>
          </div>
        </section>
        </div>
        {/*#############-------------- section 3 --------------#################*/}
        <div className="row">
        <section className="col my-3 what-client-says-section">
          <div className="col what-client-says-animation">
              <h2 className="fw-bold fs-3 text-center mb-5">What Client Says</h2>
              <div className="mx-3">
                <Carousel  itemsToShow={2} showArrows={true} pagination={false} >
                  {data.map((item, i) => (
                    <div className="d-flex">
                      <div className='fs-5 justify-content-center overflow-auto testimonial-card-container'>
                      <div className='d-flex fw-bold justify-content-center mt-4 mx-4'>
                          <img src={item.logo} loading="lazy"/>
                      </div>
                      <div className="mt-4 mx-4 py-3">
                      <i class="fa fa-quote-left mx-2" aria-hidden="true"></i>
                          {item.description}
                      <i class="fa fa-quote-right mx-2" aria-hidden="true"></i>
                      </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
          </div>
        </section>
        </div>
        {/*#############--------------  section 4 --------------#################*/}
        <div className="row">
        <section className="ceo-founder-animation-section my-4">
          <div className="ceo-founder-animation-container">
                <div className="ceo-founder-animation mx-2"></div>
          </div>
          <div className="ceo-founder-text col mx-auto">
                <p class="fst-italic js-nametag mx-4 px-2">Sandeep Banavasi, CEO</p>
                <div className="ceo-founder-testimonial fs-5 mt-auto mx-auto pb-3 w-auto">
                    <ul>
                    My team aim to build a strong and profitable made service by delivering to our 
                    customers a professional services that are always fair, efficient, helpful and responsive.
                    <li className="mt-2">
                      We are committed to building loyalty to our customers and ensuring that the satisfaction of their needs is central to everything we do.
                      </li>
                      <li>
                      We are committed to creating an environment where we can take pride in ourselves, our colleagues and our company.
                      </li>
                      <li>
                      Our team consists of highly skilled professionals with extensive experience in the IT industry. We stay up to date with the latest trends and technologies to provide you with the best solutions.
                      </li>
                    </ul>
                 </div>
          </div>
        </section>
        </div>
    {/* </div> */}
    
    </div>
    </>
  );
}

export default HomePage;
  



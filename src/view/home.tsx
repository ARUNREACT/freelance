import React, { useState } from 'react';
import './home.css';

export function Home() {
const [activeSlideIndex, setActiveSlideIndex] = useState(0);

const handleSlideChange = (nextIndex: number) => {
  // Get the total number of slides (adjust this based on your actual number of slides)
  const totalSlides = 3; // Change this to the actual number of slides

  // Ensure that the nextIndex loops back to 0 when it exceeds the total number of slides
  nextIndex = (nextIndex + totalSlides) % totalSlides;

  // Delay the slide transition by 1 second (1000 milliseconds)
  setTimeout(() => {
    setActiveSlideIndex(nextIndex);
  }, 1000); // 1000 milliseconds = 1 second
};

  return (
    <div className="container-xxl p-0 ">
      <div className="row m-0 ">

        <div className="col-12 p-0 ">
          <div
            id="imageCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner " style={{ overflow: 'hidden' }}>
              <div className={`carousel-item ${activeSlideIndex === 0 ? 'active' : ''}`}>
                <div className="col-12 p-0 carousel-content bg-dark text-white">
                  <div className="col-sm-6 col-lg-5 col-xxl-3 pl-3 pr-lg-5 ">
                    <h2>Hi, I'm <span>Arun</span></h2>
                    <h2>the Designer!</h2>
                    <h4 className="text-grey">Senlin Interiors of San Francisco</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare. Duis eget tincidunt.</p>
                  </div>
                  <div className="col-sm-6 py-4"> 
                      <img src="https://www.communardo.com/fileadmin/_processed_/3/c/csm_User_profile_confluence_stage_e29da8c86d.webp" alt="Image 1" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${activeSlideIndex === 1 ? 'active' : ''}`}>
                <div className="col-12 p-0 carousel-content bg-dark text-white">
                  <div className="col-sm-6 col-lg-5 col-xxl-3 pl-3 pr-lg-5 ">
                    <h2>Hi, I'm <span>Vicky</span></h2>
                    <h2>Developer!</h2>
                    <h5>Senlin Interiors of San Francisco</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare. Duis eget tincidunt.</p>
                  </div>
                  <div className="col-sm-6 py-4">
                    <img src="https://www.communardo.com/fileadmin/_processed_/d/1/csm_Buehne-Atlassian-DevOps_e39f2e3137.webp" alt="Image 2" className="img-fluid " />
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${activeSlideIndex === 2 ? 'active' : ''}`}>
                <div className="col-12 p-0 carousel-content bg-dark text-white">
                  <div className="col-sm-6 col-lg-5 col-xxl-3 pl-3 pr-lg-5 ">
                    <h2>Hi, I'm <span>Vishnu</span></h2>
                    <h2>Intelligence</h2>
                    <h5>Senlin Interiors of San Francisco</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare. Duis eget tincidunt.</p>
                  </div>
                  <div className="col-sm-6 py-4">
                    <img src="https://www.communardo.com/fileadmin/_processed_/2/b/csm_Sharepoint_Jira_stage_9a07e252f4.webp" alt="Image 2" className="img-fluid " />
                  </div>
                </div>
              </div>
              {/* Add more image slides as needed */}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between col carousel-button p-0">
          <div className="">
            <button className="ml-1 ml-sm-3"onClick={() => handleSlideChange(activeSlideIndex - 1)}>
             <img className="img-flud new" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672373-chevron-left-512.png"/> 
            </button>
          </div>
          <div className="chevron-arrow-left">
            <button className="mr-1 mr-sm-3"onClick={() => handleSlideChange(activeSlideIndex + 1)}>
             <img className="img-flud new" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672374-chevron-right-512.png"/> 
            </button>
          </div>
      </div>
        <div className="col-12 p-0">
          <div
            id="titleCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner" style={{ overflow: 'hidden' }}>
              <div className={`carousel-item ${activeSlideIndex === 0 ? 'active' : ''}`}>
                <div className="col-12 d-flex flex-wrap p-0 px-md-5 mt-2  text-center">
                  <div className="col-md-3 px-3 p-sm-1">
                    <h3>9 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>7 Years Exp</h3>
                    <p>Lorem ipsum dolor si, consectetur adipiscing elit. Integer.</p>
                  </div>
                  <div className="col-md-3 px-3 p-sm-1">
                    <h3>6 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>2 Years Exp</h3>
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                  </div>
                  <div className="col d-flex justify-content-center my-4 ">
                      <a className="bg-dark px-5 py-2 rounded-lg border  mt-sm-3"href={require("./../assets/resume1.pdf")}download>
                      <span className="text-white">Download My Full Portfolio</span>
                      </a>
                  </div>
                </div>
              </div>
               <div className={`carousel-item ${activeSlideIndex === 1 ? 'active' : ''}`}>
                <div className="col-12 d-flex flex-wrap p-0 px-md-5 mt-2 text-center">
                  <div className="col col-md-3  p-1">
                    <h3>2 Years Exp</h3>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>4 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                  <div className="col-md-3 px-3 p-sm-1">
                    <h3>6 Years Exp</h3>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>8 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                  <div className="col d-flex justify-content-center my-4 ">
                      <a className="bg-dark px-5 py-2 rounded-lg border  mt-sm-3"href={require("./../assets/resume2.pdf")}download>
                      <span className="text-white">Download My Full Portfolio</span>
                      </a>
                  </div>
                </div>              
                </div>
              <div className={`carousel-item ${activeSlideIndex === 2 ? 'active' : ''}`}>
                <div className="col-12 d-flex flex-wrap p-0 px-md-5 mt-2 text-center">
                  <div className="col-md-3 px-3 p-sm-1">
                    <h3>9 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>7 Years Exp</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
                  </div>
                  <div className="col-md-3 px-3 p-sm-1">
                    <h3>6 Years Exp</h3>
                    <p >consectetur adipiscing elit. Cras commodo efficitur ipsum eu ornare.</p>
                  </div>
                   <div className="col-md-3 px-3 p-sm-1">
                    <h3>2 Years Exp</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.</p>
                  </div>
                    <div className="col d-flex justify-content-center my-4 ">
                      <a className="bg-dark px-5 py-2 rounded-lg border  mt-sm-3"href={require("./../assets/resume3.pdf")}download>
                      <span className="text-white">Download My Full Portfolio</span>
                      </a>
                  </div>
                </div>              
                </div>
              {/* Add more title slides as needed */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

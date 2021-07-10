/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              A Team Of Professionals To Protect Your Team
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  href="#"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px "   
          src={require("assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>
      

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100"  >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        
        <div className="container mx-auto"  >
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  
                    
                  <h4 className="text-xl font-bold text-black">
                  24/7 Cybersecurity Operation Center
                  </h4>
                  
                  <p className="text-md font-light mt-2 text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.


                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Managed Web Applications 
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Security Management
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">24/7 Hours services </h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Provide Security services

                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

         
        </div>
        <div>
        {/* TailwindCSS */}
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        {/* Inter Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n      html {\n        font-family: 'Inter';\n      }\n    " }} />
      </div>

        {/* Page Container */}
        <div className="min-h-screen bg-gray-300 text-gray-800">
        {/* Pricing Tables */}
        <div className="container p-4 lg:p-8 mx-auto">
          <div className="text-center mt-4 lg:mt-8">
           
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Choose the best plan for you
<br/>
<br/>

            </h2>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/* Freelancer Plan */}
            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-white">
              <div className="p-5 lg:p-6 text-center flex-grow">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  Freelancer
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">$29</span>
                  <span className="text-lg text-gray-600 font-semibold">/mon</span>
                </div>
                <p className="text-gray-600">
                  Best plan if you are a solo developer
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>100</strong> Custom Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>50</strong> Paying Clients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>10GB</strong> SSD Storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>1TB</strong> High Speed Bandwidth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>24/7</strong> Email Support</span>
                  </li>
                </ul>
                <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)">
                  Get Started
                </a>
              </div>
            </div>
            {/* END Freelancer Plan */}
            {/* Agency Plan */}
            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-indigo-300">
              <div className="p-5 lg:p-6 text-center flex-grow">
                <span className="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                  <span>Agency</span>
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">$99</span>
                  <span className="text-lg text-gray-600 font-semibold">/mon</span>
                </div>
                <p className="text-gray-600">
                  For large teams working with many clients
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>1000</strong> Custom Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>200</strong> Paying Clients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>100GB</strong> SSD Storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>10TB</strong> High Speed Bandwidth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>24/7</strong> Email &amp; Skype Support</span>
                  </li>
                </ul>
                <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-indigo-700 hover:bg-indigo-900 block w-full" href="javascript:void(0)">
                  Get Started
                </a>
              </div>
            </div>
            {/* END Agency Plan */}
            {/* Enterprise Plan */}
            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-white">
              <div className="p-5 lg:p-6 text-center flex-grow">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                  Enterprise
                </span>
                <div>
                  <span className="text-3xl lg:text-5xl font-extrabold">$299</span>
                  <span className="text-lg text-gray-600 font-semibold">/mon</span>
                </div>
                <p className="text-gray-600">
                  Custom solutions for your needs
                </p>
              </div>
              <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                <ul className="space-y-4 text-sm lg:text-base">
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Unlimited</strong> Custom Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Unlimited</strong> Paying Clients</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Unlimited</strong> SSD Storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Unlimited</strong> High Speed Bandwidth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                    <span><strong>24/7</strong> Priority Email &amp; Skype Support</span>
                  </li>
                </ul>
                <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)">
                  Get Started
                </a>
              </div>
            </div>
            {/* END Enterprise Plan */}
          </div>
        </div>
        {/* END Pricing Tables */}
       
      </div>
      {/* END Page Container */}
      

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  What Special Do We Have ?
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>

        
      </section>

      
    
      

      
 
      
      <Footer />
    </>
  );
}

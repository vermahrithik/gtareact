import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';

function App() {

  let [showContent,setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >=.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    })

  });

  useGSAP(()=>{
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text",{
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky",{
        x: xMove,
      });
      gsap.to(".bg",{
        x: xMove*1.7,
      })
    });
  },[showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {
        showContent && (
          <div className='main w-full'>
            <div className="landing w-full h-screen bg-black">
              <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
                <div className="logo flex gap-7">
                  <div className="lines flex flex-col gap-[5px]">
                    <div className="line w-15 h-2 bg-white"></div>
                    <div className="line w-8 h-2 bg-white"></div>
                    <div className="line w-5 h-2 bg-white"></div>
                  </div>
                  <div className="text-4xl -mt-[8px] leading-none text-white">Rockstar</div>
                </div>
              </div>
              <div className="imagesdiv relative overflow-hidden w-full h-screen">
                <img src="./sky.png" alt="" className="absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover" />
                <img src="./bg.png" alt="" className="absolute bg scale-[1.1] top-0 left-0 w-full h-full object-cover" />
                <div className="text text-white flex flex-col gap-3 absolute top-5 left-1/2 -translate-x-1/2">
                  <h1 className='text-[7rem] leading-none -ml-30'>grand</h1>
                  <h1 className='text-[7rem] leading-none ml-20'>theft</h1>
                  <h1 className='text-[7rem] leading-none -ml-30'>auto</h1>
                </div>
                <img src="./girlbg.png" className="absolute character top-[10%] left-1/2 -translate-x-1/2 scale-[0.90]" alt="" />
              </div>
              <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-4 items-center">
                  <i className="text-4xl ri-arrow-down-line"></i>
                  <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
                </div>
                <img className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
              </div>
            </div>
            <div className="w-full h-screen flex items-center justify-center bg-black">
              <div className="cntnr flex text-white w-full h-[80%]">
                <div className="limg relative w-1/2 h-full">
                  <img
                    className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="./imag.png"
                    alt=""
                  />
                </div>
                <div className="rg w-[30%] py-10">
                  <h1 className="text-7xl">Still Running,</h1>
                  <h1 className="text-7xl">Not Hunting</h1>
                  <p className="mt-10 text-1xl font-[Helvetica_Now_Display]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio possimus, asperiores nam, omnis inventore nesciunt
                    a architecto eveniet saepe, ducimus necessitatibus at
                    voluptate.
                  </p>
                  <p className="mt-3 text-1xl font-[Helvetica_Now_Display]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    eius illum fugit eligendi nesciunt quia similique velit
                    excepturi soluta tenetur illo repellat consectetur laborum
                    eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                    autem sapiente.
                  </p>
                  <p className="mt-10 text-1xl font-[Helvetica_Now_Display]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    eius illum fugit eligendi nesciunt quia similique velit
                    excepturi soluta tenetur illo repellat consectetur laborum
                    eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                    autem sapiente.
                  </p>
                  <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl mb-10">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
}

export default App
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle);
    });
  });

  return (
    <>
      <div className="h-screen flex items-center justify-center w-full bg-zinc-900">
        <div data-scroll data-scroll-speed="-0.16" className="h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
          <div className="flex items-center justify-between gap-6">
            <div className="h-40 w-40 flex items-center justify-center bg-cyan-50 rounded-full">
              <div className="h-[62%] w-[62%] flex items-center justify-center bg-black rounded-full">
                <div style={{ transform: `rotate(${rotate - 180}deg)` }}
                  className="line w-full">
                  <div className="h-6 w-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="h-40 w-40 flex items-center justify-center bg-cyan-50 rounded-full">
              <div className="h-[62%] rotate-[${rotate}] w-[62%] flex items-center justify-center bg-black rounded-full">
                <div
                  style={{ transform: `rotate(${rotate - 180}deg)` }}
                  className="line w-full">
                  <div className="h-6 w-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;

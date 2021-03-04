import "./Wrona.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
const Wrona = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    t1.to(".wrona", { y: "-100%", duration: 3 });
  });

  return (
    <div className="wrona">
      Wrona przestan mi <br />
      studentow przesladowac
    </div>
  );
};

export default Wrona;

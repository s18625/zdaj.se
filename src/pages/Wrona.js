import "./Wrona.css";
import React, {
  useRef,
  useEffect
} from "react";
import gsap from "gsap";
import logo from "../images/logo.png";
const Wrona = () => {
  useEffect(() => {
    const t1 = gsap.timeline({
      defaults: {
        ease: "power4.inOut"
      }
    });
    t1.to(".text", {
      opacity: "1",
      duration: 1,
      stagger: 0.3
    });
    t1.to(".up", {
      y: "-100%",
      duration: 2
    });
    // t1.to(".wrona", { y: "-100%", duration: 1 });
  });

  return ( <
    div className = "wrona up" >
    <
    span className = "text" > Koniec < /span> <
    span className = "text" > z placeniem < /span> <
    span className = "text" > za < /span> <
    span className = "text" > ITN < /span> <
    img className = "logo up"
    src = {
      logo
    }
    alt = "" / >
    <
    /div>
  );
};

export default Wrona;
import React from "react";
import Img1 from "../images/illustration-woman-online-desktop.svg";
import Img2 from "../images/bg-pattern-desktop.svg";
import Img3 from "../images/illustration-box-desktop.svg";

export default function Image() {
  return (
    <div>
      <img className="picture01" src={Img1} alt="" />
      <img className="picture02" src={Img2} alt="" />
      <img className="picture03" src={Img3} alt="" />
    </div>
  );
}

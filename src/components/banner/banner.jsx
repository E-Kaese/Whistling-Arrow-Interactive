import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <img
        src={banner}
        alt="banner"
        className="img-fluid w-100 bottom-shadow"
      />
      <h1 className="bg-black mono text-center text-white m-0 pb-5">We Develop Experiences</h1>
    </div>
  );
};

export default Banner;

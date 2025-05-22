import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">Find Us On</h1>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;

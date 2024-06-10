import React from "react";
import AboutItem from "./AboutItem";

const AboutCompany = ({ data }) => {
  return (
    <div className="AboutCompany pageLayout px-0 mx-auto">
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="about-item">
            <AboutItem data={item} isEven={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;

import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Freelance Developer",
    compnayName: "Self-Employe",
    details: `Creating Landing Pages, Web Applications, and Mobile Applications.`,
  },
  {
    year: "2021 - 2022",
    position: " Programmer",
    compnayName: "SL Corp Indonesia",
    details: `Creating internal web applications.`,
  },
  {
    year: "2019 - 2021",
    position: " Junior Programmer",
    compnayName: "Katalis Indonesia",
    details: `Creating web applications.`,
  },
  {
    year: "2018 - 2019",
    position: " Internship",
    compnayName: "ICT Pomosda",
    details: `Software, Hardware, and Networking.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

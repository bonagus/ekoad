import React from "react";

const educationContent = [
  {
    year: "2014-2019",
    degree: "TEKNIK INFORMATIKA",
    institute: "STT Pomosda Nganjuk",
    details: `  Jurusan Teknik Informatika (S.Kom).`,
  },
  {
    year: "2011-2014",
    degree: "",
    institute: "SMAN 19 Kab. TANGERANG",
    details: ``,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

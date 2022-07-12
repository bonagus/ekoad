import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Eko" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "middle name", metaInfo: "Agus" },
  { meta: "Nationality", metaInfo: "Indonesian" },
  { meta: "last name", metaInfo: "Darmawan" },
  { meta: "Address", metaInfo: "Indonesia" },
  { meta: "phone", metaInfo: "+6281333452810" },
  { meta: "Email", metaInfo: "easdarm@gmail.com" },
  { meta: "LinkedIn", metaInfo: "eko-agus-darmawan" },
  { meta: "languages", metaInfo: "English, Indonesia" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

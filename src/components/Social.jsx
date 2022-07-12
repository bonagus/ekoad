import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/ekoa.darm",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/0xyeko" },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/easdarm",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/eko-agus-darmawan/?locale=en_US" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Work <span>Details</span>
        </h1>
        <span className="title-bg">works</span>
      </div>
      {/* Meta Starts */}

          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Personal Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">My Self</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">Wordpress</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://bonagus.diantekno.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Bonagus
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Personal Web – The Bonagus</h1>
      <img src="img/blog/blog-post-2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Situs Profesional pertama saya, dibangun menggunakan wordpress beserta plugin-plugin tambahan, wacana dari situs ini telah dimulai sejak paruh awal tahun 2020 namun baru terealisasi dan di eksekusi pada penghujung tahun 2020.
          </p>
        </div>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;

import React from "react";

const ModalThreeBlogContent = () => {
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
              <span className="ft-wt-600 uppercase">Company Profile</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Katalis ICT</span>
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
                  href="https://katalis-ict.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Katalis ICT
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Company Profile – Katalis ICT</h1>
      <img src="img/blog/blog-post-3.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Merupakan Situs Company Profile Milik CV. Katalis Indonesia yang terdapat di kota Semarang, situs ini dibuat menggunakan wordpress dengan tema minimalis. Untuk melihat detail dan mengakses langsung situs dapat melalui link https://katalis-ict.co.id/
          </p>
        </div>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;

import React from "react";

const ModalOneBlogContent = () => {
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
              <span className="ft-wt-600 uppercase">Website Apps</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Dinas ESDM Jawa Tengah</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, PHP</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Internal Apps
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>E-Tracking – Andesit ESDM Jateng</h1>
      <img src="img/blog/blog-post-1.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Sistem E-Tracking atau Andesit merupakan sistem yang dimiliki oleh dinas ESDM Jateng, berfungsi sebagai pintu masuk bagi para pengguna yang memerlukan izin untuk melakukan pertambangan. Sistem ini menggunakan bahasa pemrograman PHP.
          </p>
        </div>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;

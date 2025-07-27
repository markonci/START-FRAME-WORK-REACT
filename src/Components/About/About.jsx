import React from "react";

export default function About() {
  return (
    <div className="about text-white vh-100 d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <h2>about component</h2>
        <p className="frist-p">
          <i className="fa fa-star"></i>
        </p>
        <div className="row">
          <div className="col-md-12">
            <div>
              <ul className="d-flex flex-column  flex-md-row justify-content-center text-center list-unstyled ps-2   ">
                <li className="ms-2 mb-4 col-md-6">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </li>

                <li className="ms-2 col-md-6">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

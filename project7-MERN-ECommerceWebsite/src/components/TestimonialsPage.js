import React from "react";
import "./TestimonialsPage.css";

const TestimonialsPage = () => {
  return (
    <div>
      <h3 class="testo">Our Customers </h3>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/p9-img-3.jpg"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className>
                    <h4 className="titletest">ALLAN CAMPBELL</h4>
                    <p className="paratest">
                      {" "}
                      Thank you so much for a job well done and i like this
                      creative Gallery ..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box three">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/h3-team-img-1.jpg"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className>
                    <h4 className="titletest">DIANA LEACH</h4>
                    <p className="paratest">
                      I just wanted to let you know that it’s been great working
                      with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/p9-img-1.jpg"
                      className="rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className>
                    <h4 className="titletest">CARRIE COYLE</h4>
                    <p className="paratest">
                      Very successful website You guys are the best! Keep up the
                      great work !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;

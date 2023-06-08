import React from "react";

const TeamDetailsHero = () => {
  return (
    <>
      <div className="team-single-page pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="team-hero-img p-relative">
                <img src="assets/img/team/single-team.jpg" alt="" />
                <div className="team-info-box white-bg pt-60 pl-100 pr-100">
                  <h3 className="t-box-title">Hillextina Merinda</h3>
                  <span>Ux Researcher @Uber</span>
                  <div className="team-member-info-list">
                    <ul>
                      <li>Expertise: Planning, Strategy</li>
                      <li>Experience: 15 Years</li>
                      <li>
                        E-mail:
                        <a href="mailto:'Israfilsupol.info@gmail.com'">
                          Israfilsupol.info@gmail.com
                        </a>
                      </li>
                      <li>
                        Phone: <a href="tel:507-452-1254"> 507-452-1254</a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-social-icons mt-30">
                    <span>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsHero;

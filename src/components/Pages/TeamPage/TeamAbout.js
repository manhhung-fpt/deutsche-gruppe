import React from "react";
import { Link } from "react-router-dom";
import team_data from "../../../data/teamData.json";

const TeamAbout = () => {
  return (
    <>
      <div className="tp-team-area pt-115 ">
        <div className="container">
          <div className="row">
            {team_data.map((team, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="tp-team pb-30 pt-25">
                  <div className="tp-team__thumb">
                    <img src={team.img} alt="" />
                  </div>
                  <div className="tp-team__info pt-25">
                    <h3 className="tp-team-name">
                      <Link to="/team-details">{team.name}</Link>
                    </h3>
                    <p>{team.title}</p>
                  </div>
                  <div className="tp-team__social">
                    {team.social_links.map((l, i) => (
                      <a key={i} href={`${l.link}`} target={l.target}>
                        <i className={l.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tp-border-line d-block mt-100">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamAbout;

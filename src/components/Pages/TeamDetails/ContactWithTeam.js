import React from "react";

const ContactWithTeam = () => {
  return (
    <>
      <div className="team-ct-form grey-bg-4 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="team-ct-heading text-center">
              <span className="mb-25 d-inline-block">Not Enough ?</span>
              <h2 className="team-ct-heading-text mb-55">
                Direct Contact with me
              </h2>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <div className="tp-contact-form position-static white-bg pt-60 pl-50 pr-50 pb-60">
                <h4 className="tp-contact-form-title">
                  Derect Contact with us
                </h4>
                <form action="#">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your mail"
                  />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Enter your mail"
                  ></textarea>
                  <button type="submit" className="tp-btn-border">
                    Send Massage
                    <span>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactWithTeam;

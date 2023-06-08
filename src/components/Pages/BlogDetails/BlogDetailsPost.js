import React from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../Blog/BlogSidebar";

const BlogDetailsPost = () => {
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="postbox__wrapper mr-20">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb m-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/single-blog.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta mb-25">
                      <span>
                        <Link to="/blog-details">
                          <i className="fal fa-user"></i> Tushar
                        </Link>
                      </span>
                      <span>
                        <i className="fal fa-calendar-day"></i> July 21, 2020{" "}
                      </span>
                      <span>
                        <Link to="/blog-details">
                          <i className="fal fa-comment"></i> 02 Comments
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title mb-25">
                      How To Develop Your Business Technology Roadmap
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Quick summary ↬ Software development without a roadmap
                        is akin to driving off a cliff — an undertaking that
                        seriously jeopardizes your product’s life. Here’s how to
                        develop a business technology roadmap that ensures your
                        project safely reaches its final destination.
                      </p>
                      <p>
                        When people have an idea for a piece of software or an
                        app, they tend to be pretty energized about getting it
                        to market as quickly as possible. It’s exciting to
                        create an app or piece of software no one’s ever
                        imagined or built before. As software developers, we’re
                        usually right there with them.
                      </p>
                      <p>
                        At some point, though, we need to sit down with clients
                        and give them a sometimes sobering reality: software
                        development without a business technology roadmap can be
                        a lot like driving aimlessly from point A to point Z.
                        Sure, you get to discover new worlds and experience
                        unexpected adventures, but you also frequently get lost,
                        spend more money, and can lose enthusiasm for the
                        journey.
                      </p>

                      <h3 className="postbox__subtite mb-25">
                        What Is A Business Technology Roadmap? #
                      </h3>
                      <p>
                        Unlike detailed blueprints that lay out all tasks,
                        deadlines, bug reports, and more along the way,
                        technology roadmaps are high-level visual summaries
                        highlighting a company’s vision or plans.
                        <br />
                        <br />
                        In an Agile approach, a technology roadmap feeds the
                        sprint and grooming processes, providing insight into
                        how the product will travel from start to finish. It
                        makes it easier for development teams to:
                      </p>
                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <img
                              src="assets/img/blog/single-blog-2.jpg"
                              alt=""
                            />
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <img
                              src="assets/img/blog/single-blog-3.jpg"
                              alt=""
                            />
                          </p>
                        </div>
                      </div>
                      <h3 className="postbox__subtite mb-25">
                        How to become a top conference speaker?
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elitm sed do eiusmod tempor incididunt labore ets magna
                        aliquatenim minim veniam quis nostrud exercitation
                        ullamco laboris nisut aliquip ex ea commod Duis aute
                        irure dolorn reprehenderit voluptate velit esse
                      </p>
                    </div>
                    <div className="single-blog-cloud pt-45 pb-45 tp-brand-border">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <div className="postbox__tag tagcloud">
                            <span>Tags:</span>
                            <Link to="/blog-details">Business</Link>
                            <Link to="/blog-details">Design</Link>
                            <Link to="/blog-details">apps</Link>
                            <Link to="/blog-details">data</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">(04) Comment</h3>
                  <ul>
                    <li>
                      <div className="postbox__comment-box mr-80 d-flex">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img
                              src="assets/img/blog/comments/comment-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-10 p-relative">
                          <div className="postbox__comment-name">
                            <h5>Kristin Watson</h5>
                            <span className="post-meta"> MARCH 10, 2020</span>
                            <div className="postbox__comment-reply">
                              <Link to="/blog-details">
                                <i className="fal fa-share-all"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, butb <br /> the majority have. There are
                            many variations.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="postbox__comment-box mr-80 d-flex">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img
                              src="assets/img/blog/comments/comment-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-10 p-relative">
                          <div className="postbox__comment-name">
                            <h5>Kristin Watson</h5>
                            <span className="post-meta"> MARCH 10, 2020</span>
                            <div className="postbox__comment-reply">
                              <Link to="/blog-details">
                                <i className="fal fa-share-all"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but <br /> the majority have. There are
                            many variations of passages
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="postbox__comment-box mr-80 d-flex">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img
                              src="assets/img/blog/comments/comment-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-10 ">
                          <div className="postbox__comment-name p-relative">
                            <h5>Kristin Watson</h5>
                            <span className="post-meta"> MARCH 10, 2020</span>
                            <div className="postbox__comment-reply">
                              <Link to="/blog-details">
                                <i className="fal fa-share-all"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but <br /> the majority have. There are
                            many variations.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="postbox__comment-form">
                  <h3 className="postbox__comment-form-title">
                    Write a comment
                  </h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="postbox__comment-input">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="postbox__comment-input">
                          <input type="email" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-input">
                          <input type="text" placeholder="Website" />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-input">
                          <textarea placeholder="Enter your comment ..."></textarea>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-btn">
                          <button type="submit" className="tp-btn-border">
                            Post Comment
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
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPost;

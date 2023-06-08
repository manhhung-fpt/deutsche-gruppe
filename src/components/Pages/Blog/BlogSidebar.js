import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Search Here</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={e => e.preventDefault()}>
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Categories</h3>
        <div className="sidebar__widget-content">
          <ul>
            <li>
              <Link to="/blog">Web Design</Link> <span>03</span>
            </li>
            <li>
              <Link to="/blog">Branding Design</Link> <span>07</span>
            </li>
            <li>
              <Link to="/blog">Photography </Link> <span>09</span>
            </li>
            <li>
              <Link to="/blog">
                Business Statergy <span>01</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">UI/UX Design </Link> <span>00</span>
            </li>
            <li>
              <Link to="/blog">Web Development</Link> <span>26</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">pages</h3>
        <div className="sidebar__widget-content wd-hide-border">
          <ul>
            <li>
              <Link to="/blog">Web Design</Link>
            </li>
            <li>
              <Link to="/blog">Branding Design </Link>
            </li>
            <li>
              <Link to="/blog">Photography </Link>
            </li>
            <li>
              <Link to="/blog">Business Statergy</Link>
            </li>
            <li>
              <Link to="/blog">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/blog">Web Development</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            <div className="rc__post mb-20 d-flex align-items-center">
              <div className="rc__post-thumb mr-20">
                <Link to="/blog-details">
                  <img src="assets/img/blog/sidebar/blog-sm-1.jpg" alt="" />
                </Link>
              </div>
              <div className="rc__post-content">
                <div className="rc__meta">
                  <span>4 March. 2022</span>
                </div>
                <h3 className="rc__post-title">
                  <Link to="/blog-details">
                    Don’t Underestimate The Software Administration UX
                  </Link>
                </h3>
              </div>
            </div>
            <div className="rc__post mb-20 d-flex align-items-center">
              <div className="rc__post-thumb mr-20">
                <Link to="/blog-details">
                  <img src="assets/img/blog/sidebar/blog-sm-2.jpg" alt="" />
                </Link>
              </div>
              <div className="rc__post-content">
                <div className="rc__meta">
                  <span>4 March. 2022</span>
                </div>
                <h3 className="rc__post-title">
                  <Link to="/blog-details">
                    Designing Human-Machine Interfaces..
                  </Link>
                </h3>
              </div>
            </div>
            <div className="rc__post mb-20 d-flex align-items-center">
              <div className="rc__post-thumb mr-20">
                <Link to="/blog-details">
                  <img src="assets/img/blog/sidebar/blog-sm-3.jpg" alt="" />
                </Link>
              </div>
              <div className="rc__post-content">
                <div className="rc__meta">
                  <span>4 March. 2022</span>
                </div>
                <h3 className="rc__post-title">
                  <Link to="/blog-details">
                    Web Design Done Well: Excellent Editorial
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Popular Tag</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <Link to="/blog">business</Link>
            <Link to="/blog">clean</Link>
            <Link to="/blog">consult</Link>
            <Link to="/blog">desgin</Link>
            <Link to="/blog">keyboard</Link>
            <Link to="/blog">kit</Link>
            <Link to="/blog">mouse</Link>
            <Link to="/blog">Popular</Link>
            <Link to="/blog">room</Link>
            <Link to="/blog">tech</Link>
            <Link to="/blog">usability</Link>
            <Link to="/blog">ux</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;

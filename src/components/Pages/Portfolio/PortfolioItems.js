import React from "react";
import { Link } from "react-router-dom";

// portfolio items
const portfolio_data = [
  {
    id:1,
    img:'/assets/img/project/item-1.jpg',
    tag:"Business",
    title:"Investments"
  },
  {
    id:2,
    img:'/assets/img/project/item-2.jpg',
    tag:"Business",
    title:"Business cycle"
  },
  {
    id:3,
    img:'/assets/img/project/item-3.jpg',
    tag:"Business",
    title:"Intern program"
  },
  {
    id:4,
    img:'/assets/img/project/item-4.jpg',
    tag:"Business",
    title:"Development"
  },
  {
    id:5,
    img:'/assets/img/project/item-5.jpg',
    tag:"Business",
    title:"Branding"
  },
  {
    id:6,
    img:'/assets/img/project/item-6.jpg',
    tag:"Business",
    title:"Golden hello"
  },
  {
    id:7,
    img:'/assets/img/project/item-7.jpg',
    tag:"Business",
    title:"Consulting"
  },
  {
    id:8,
    img:'/assets/img/project/item-8.jpg',
    tag:"Business",
    title:"Management"
  },
  {
    id:9,
    img:'/assets/img/project/item-9.jpg',
    tag:"Business",
    title:"Business Consulting"
  },
]

const PortfolioItems = () => {
  return (
    <>
      <div className="project-page-list pt-140 pb-90">
        <div className="container">
          <div className="row">
            {portfolio_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <div className="pj-list-item mb-50">
                <div className="pj-list__img">
                  <img src={item.img} alt="" />
                </div>
                <span>
                  <a href="#">{item.tag}</a>
                </span>
                <h4 className="pj-list__title">
                  <Link to="/portfolio-details">{item.title}</Link>
                </h4>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItems;

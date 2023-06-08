import React from "react";
import faq_data from "../../../data/faq.json";
import SingleFaq from "./SingleFaq";

const Accordion = () => {
  return (
    <>
      <div className="faq-section pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <div className="accordion tp-accordion" id="accordionExample">
                {faq_data.faq.map((item) => (
                  <SingleFaq key={item.id} item={item} parent='accordionExample' />
                ))}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;

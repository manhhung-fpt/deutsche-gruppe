import React from "react";
import { ServiceItem } from "../../HomeTwo/Services";

const OurService = () => {
  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-30">OUR SERVICES</span>
                <h2 className="tp-section-title">Explore Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceItem
              icon="pe-7s-arc"
              title="Branding"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-cloud-download"
              title="Management"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-disk"
              title="Development"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-hammer"
              title="Delevery"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-umbrella"
              title="Operational"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-graph3"
              title="Analysis"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-cup"
              title="Design"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-config"
              title="Digital Service"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;

import React, { useState } from "react";

const FaqList = ({ item }) => {
  const { question, ans } = item;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="faq-question" onClick={() => setOpen(!isOpen)}>
          <h2>{question}</h2>

          {isOpen ? (
            <img src="/assets/img/icons/minus.png" alt="minus" />
          ) : (
            <img src="/assets/img/icons/add.png" alt="add" />
          )}
        </div>
        {isOpen && <p>{ans}</p>}
      </div>

      {/* <div className="faq-section pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <div className="accordion tp-accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Lorem ipsum dolor sit amet consectetur?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Adipiscing elit, sed do eiusmod tempor?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Quis nostrud exercitation ullamco?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq2 "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Incididunt ut labore et dolore?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq4"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Quis nostrud exercitation ullamco?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq5"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Adipiscing elit, sed do eiusmod tempor?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq6"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWSeven"
                      aria-expanded="false"
                      aria-controls="collapseWSeven"
                    >
                      Quis nostrud exercitation ullamco?
                    </button>
                  </h2>
                  <div
                    id="collapseWSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq7"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Lorem ipsum dolor sit amet consectetur?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq8"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Lorem ipsum dolor sit amet consectetur?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq9"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Research helps you plan the best way to get your product
                      from the manufacturer to the retail shelf. In addition to
                      deciding which retailers should carry your product, you
                      should determine where your inventory will be
                      held.Research helps you plan the best way to get your
                      product from the manufacturer to the retail shelf. In
                      addition to deciding which retailers should carry your
                      product,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FaqList;

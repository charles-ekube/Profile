import React from "react";
import "./style.css";
import { ServicesCardDetails } from "../card-details/servicesCardDetails";
import { ArrowUpward } from "@material-ui/icons";

const ServicesCard = () => {
  return (
    <>
      {ServicesCardDetails &&
        ServicesCardDetails.map((cardDetails) => (
          <section className="container" key={cardDetails.id}>
            <div className="text animate__animated animate__fadeInUp animate__slow ">{cardDetails.description}</div>
            <div className="overlay">
              <span></span> 
              {cardDetails.title}
            </div>
            <span className='overlay-click'>
              <ArrowUpward/>
            </span>
          </section>
        ))}
    </>
  );
};

export { ServicesCard };

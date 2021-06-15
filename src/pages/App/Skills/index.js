import React from "react";
import "./style.css";
import {
  NavTogglebutton,
  PreviousBtn,
  ServicesCard,
} from "../../../components";

const Skills = () => {
  return (
    <>
      <PreviousBtn />
      <NavTogglebutton />
      <main>
        <section className='services-header'>
          <h2>My Services</h2>
        </section>

        <section className="services-container">
          <ServicesCard />
        </section>
      </main>
    </>
  );
};

export { Skills };

import React from "react";
import "./style.css";
import {useHistory} from 'react-router-dom';
import { NavTogglebutton, PreviousBtn } from "../../../components";
import { Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const Contact = () => {

  const history = useHistory()
  const previousPage = () => {
      history.goBack();
  }

  return (
    <>
      <NavTogglebutton />
      <PreviousBtn onClick={previousPage}/>
      <main className="contact-container">
        <section className="contact-content">
          <div className="contact-header">
            <h6>Contact</h6>
            <h2>Get in touch</h2>
          </div>
          <div className="contact-details">
            <h6>CONTACT DETAILS</h6>
            <ul>
              <li>
                <a href="mailto:charleswakili797@gmail.com">
                  <span>
                    <Email />
                  </span>
                  charleswakili797@gmail.com
                </a>
              </li>
              <li>
                <a href="/github.com/charles-ekube">
                  <span>
                    <GitHub />
                  </span>
                  github
                </a>
              </li>
              <li>
                <a href="/twitter.com/BobbiSirr">
                  <span>
                    <Twitter />
                  </span>
                  twitter
                </a>
              </li>
              <li>
                <a href="/https://linkedin.com/in/charles-ekube-153761177/">
                  <span>
                    <LinkedIn />
                  </span>
                  link
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </section>
        <section className="large-screen-fill"></section>
      </main>
    </>
  );
};

export { Contact };

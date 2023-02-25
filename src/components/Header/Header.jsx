import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import  'react-bootstrap-icons';


const navLinks = [
  {
    display: "Home",
    url: "",
  },
  {
    display: "APIs",
    url: "https://app.swaggerhub.com/apis-docs/Bank-Assist/kore-banking_api_documentation/2.0#/Accounts/GetAccountDetails",
  },

  {
    display: "Functional flows",
    url: "https://lucid.app/lucidchart/137d99f0-fa18-4b44-8fdd-268773033fb1/edit?page=0_0#",
  },
  {
    display: "Appendix",
    url: "https://developer.kore.ai/docs/bots/chatbot-overview/about-bots/",
  },
  {
    display: "Bot builder",
    url: "https://bots.kore.ai/botbuilder/",
  },
  {
    display: "About",
    url: "https://kore.ai/about-us/",
  },

];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
            <i class="ri-bank-fill"></i> Bank Assist.
              
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

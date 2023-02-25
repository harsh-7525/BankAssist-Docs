import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
            <p className="mb-5">
             BANKASSIST
              </p>
              <h2 className="mb-4 hero__title">
              The Most Intelligent
               <br /> Banking Virtual <br /> Assistant
              </h2>
              <p className="mb-5">
              AI-native omnichannel conversational banking assistant <br /> 
              pre-trained on 200+ retail banking use cases. <br />
              </p>
            </div>
            <div >
            {/* className="search" */}
              {/* <input type="text" placeholder="Search" /> */}
              <form>
              <button className="btn" formaction="https://demodpd.kore.ai/BankAssist/UI/">Sample bot</button>
              </form>
              {/* <button className="btn">Search</button> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

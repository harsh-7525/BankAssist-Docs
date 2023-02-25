import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Wrapper",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://th.bing.com/th/id/OIP.xbxyTPWIpl95OHAsQRWqggHaEU?w=266&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",//courseImg1,
    url : "https://app.swaggerhub.com/apis-docs/Bank-Assist/kore-banking_api_documentation/2.0#/Accounts/GetAccountDetails",
  },

  {
    id: "02",
    title: "Workbench",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://media.istockphoto.com/id/1014317678/photo/engineer-configure-data-center-on-laptop.jpg?b=1&s=612x612&w=0&k=20&c=3RuePUHdqdZ91FN3YhP5e9RY4vOGm18jd4B9KgdV12w=",//courseImg2,
    url : "https://kore.ai/bankassist/solutions-workbench/",
  },

  {
    id: "03",
    title: "Tips and tricks",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://www.bairesdev.com/wp-content/uploads/2021/01/8-Debugging-Techniques.png", //courseImg3,
    url : "https://docs.google.com/document/d/1O_-Zildnz8x9FFEaP68PHKEEv4XvlebyznBspdcicH8/edit#heading=h.5foha766knps",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Documentation</h2>
                <p>
                This documentation website gives new team members access to all the knowledge that has been 
                collected over the course of our BankAssist projects, both past and ongoing. New team members 
                are able to immediately understand decisions made in the past and to find relevant information 
                without having to ask others on the team over the course of many weeks.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;

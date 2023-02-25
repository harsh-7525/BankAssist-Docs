import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Log Me In",
    imgUrl: "https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?size=626&ext=jpg&ga=GA1.1.901811638.1677191351&semt=sph",//courseImg01,
    students: "Used to authenticate the user",
    rating: 1.7,
    url : "https://dandy-quokka-91d.notion.site/LogMeIn-2fd4493e9f3e4d93a64140106e5c8a4f",
  },
  {
    id: "02",
    title: "New User Enrollment",
    //https://img.freepik.com/free-photo/join-us-register-newsletter-concept_53876-101274.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=sph
    
    imgUrl: "https://www.pngkey.com/png/detail/203-2035339_register-user-register-online-icon-png.png",//courseImg02,
    students: "Creating phone id and phone pin",
    rating: 1.7,
    url : "https://drive.google.com/file/d/1CcsGJ9_Xjugmmo-EIobC12PtaJutqOMe/view?usp=share_link",
  },

  {
    id: "03",
    title: "Authenticate Existing User",
    imgUrl: "https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=ais",//courseImg02,
    students: "Used to authenticate user via IVR",
    rating: 1.7,
    url : "https://drive.google.com/file/d/1GReervp_J3374Mb3rzrKoI1VgWxt6wrJ/view?usp=share_link",
  },

   {
    id: "04",
    title: "Get Balance",
    imgUrl: "https://img.freepik.com/free-vector/bank-customer-getting-loan-man-wheeling-cart-with-cash-flat-vector-illustration-finance-money-banking-service_74855-8233.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=ais",//courseImg02,
    students: "Used to show balance of user",
    rating: 1.7,
    url : "https://dandy-quokka-91d.notion.site/Get-Balance-673411f3759d4808a484d5807ab1a5aa",
  },
  {
    id: "04",
    title: "Get Customer Information",
    imgUrl: "https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?size=626&ext=jpg&ga=GA1.1.901811638.1677191351&semt=ais",//courseImg02,
    students: "Used to show balance of user",
    rating: 1.7,
    url : "https://dandy-quokka-91d.notion.site/Get-Customer-Information-38a1d5f204734144808b3f3bc7f856b0",
  },
  {id: "05",
  title: "Get Transaction",
  imgUrl: "https://img.freepik.com/free-vector/man-transferring-money-woman-via-smartphone-online-transaction-banking-flat-vector-illustration-finance-digital-technology-concept_74855-10107.jpg?size=626&ext=jpg&ga=GA1.1.901811638.1677191351&semt=sph",//courseImg03,
  students: "Used to show transactions",
  rating: 1.7,
  url : "https://dandy-quokka-91d.notion.site/Get-Transactions-d1677fb01f2b44acadb632ec4d4afb01",
  },
  {
    id: "06",
    title: "Card Controls",
    imgUrl: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/18/634025-debit-credit-card-fraud.jpg",//courseImg04,
    students: "To Freeze/Unfreeze/Replace the cards",
    rating: 1.7,
    url : "https://dandy-quokka-91d.notion.site/CARD-CONTROLS-47b3d092a31e47dab1fa1194e0eba15c#3e59c18d1016437199b90360f992455b",
  },
  {
    id: "07",
    title: "ReportCardLost",
    imgUrl: "https://th.bing.com/th/id/OIP.HWdRGq4xhVzRF6uJXRFFWgHaD0?w=339&h=179&c=7&r=0&o=5&dpr=1.5&pid=1.7",//courseImg04,
    students: "To report card as lost/stolen",
    rating: 1.7,
    url : "https://docs.google.com/document/d/1Ha0lwicG7o6pdfce9WRmBpnl5Fg_p34B--EjRuywwJU/edit",
  },
  {
    id: "8",
    title: "Add Biller",
    imgUrl: "https://img.freepik.com/premium-vector/financial-obligation-document-promissory-bill-loan-agreement-debt-return-promise_1325-3602.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=sph",//courseImg04,
    students: "Used to add new billers",
    rating: 1.7,
    url : "https://blush-chess-e17.notion.site/Add-a-Biller-2e1f9d81a71b4d4ba3501c5eb8780e07",
  },
  {
    id: "9",
    title: "View Status",
    imgUrl: "https://img.freepik.com/free-vector/engineers-with-battery-charging-clock-stars-with-rocket-fast-charging-technology-fast-charge-batteries-new-battery-engineering-concept_335657-2122.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=ais",//courseImg04,
    students: "To view status of accounts",
    rating: 1.7,
    url : "https://docs.google.com/document/d/1qKp8wVIXvBlDpnV41GfrD5VV-dtbD3qVSOMFBgC2uKk/edit?usp=sharing",
  },
  {
    id: "9",
    title: "Send secure message",
    imgUrl: "https://img.freepik.com/free-vector/computer-pirate-hacker-create-software-designed-cause-damage-computer-server-computer-network-malware-computer-virus-spyware-concept_335657-1836.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=ais",//courseImg04,
    students: "To send secure messages",
    rating: 1.7,
    url : "https://docs.google.com/document/d/1Ha0lwicG7o6pdfce9WRmBpnl5Fg_p34B--EjRuywwJU/edit",
  },
  {
    id: "10",
    title: "Demo feedback",
    imgUrl: "https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?size=626&ext=jpg&ga=GA1.2.901811638.1677191351&semt=sph",//courseImg04,
    students: "Dialog for Feedback",
    rating: 1.7,
    url : "https://docs.google.com/document/d/1Ha0lwicG7o6pdfce9WRmBpnl5Fg_p34B--EjRuywwJU/edit",
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Dialog tasks</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;

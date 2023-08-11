import React, { useEffect } from "react";
import { Container } from "reactstrap";
import "../style/kidsModels.css";
import TitleIcon from "../assests/Images/title-icon.png";
import { Helmet } from "react-helmet";
const KidsModels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="pt-md-5 pb-md-5 mt-md-5 mb-md-5 custom-section">
        <Helmet>
          <title>Influencer Market | Kids Model</title>
          <meta name="Kids Model" content="This is my page Kids Model." />
        </Helmet>
        <Container>
          <div className="page-title text-center">
            <h2 className="m-0">Kids Models</h2>
            <div className="text-center">
              <img src={TitleIcon} alt="" className="titleicon" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default KidsModels;

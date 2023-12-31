import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../../style/femaleInfluencer.css";
import { Container, Row } from "reactstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import TitleIcon from "../../assests/Images/title-icon.png";
import Alisha1 from "../../assests/Alisha/Alisha1.jpg";
import Alisha2 from "../../assests/Alisha/Alisha2.jpg";
import Alisha3 from "../../assests/Alisha/Alisha3.jpg";
import Alisha4 from "../../assests/Alisha/Alisha4.jpg";
import Alisha5 from "../../assests/Alisha/Alisha5.jpg";
import Alisha6 from "../../assests/Alisha/Alisha6.jpg";
import Alisha7 from "../../assests/Alisha/Alisha7.jpg";
import { Helmet } from "react-helmet";

const FemaleInfluencer = () => {
  const [popularModels, setPopularModels] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch popular models from an API or any data source
    // and update the state with the received data
    fetchPopularModels()
      .then((data) => setPopularModels(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchPopularModels = async () => {
    // Fetch popular models data from an API
    // Replace this with your actual API endpoint
    const response = await fetch("https://api.example.com/popular-models");
    const data = await response.json();
    return data;
  };
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div>
      <Helmet>
        <title>Influencer Market Female | Influencer</title>
        <meta name="Female Influencer" content="This is my page Female Influencer." />
      </Helmet>
      <div className="female-influencer">
        <div className="page-title text-center ">
          <h2 className="m-0">Top Influencer</h2>
          <div className="text-center">
            <img src={TitleIcon} alt="" className="titleicon" />
          </div>
        </div>
        <Row className="mt-3 mb-3">
          {/* <div className="myswiper mt-3 mb-3"> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow]}
          >
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha4} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha5} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha6} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha7} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiper-img" src={Alisha2} />
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </Row>
      </div>
      <div className="page-title text-center">
        <h2 className="m-0">Female - Influencer</h2>
        <div className="text-center">
          <img src={TitleIcon} alt="" className="titleicon" />
        </div>
        <div className=" mb-5" style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            placeholder="Search by Category"
            autoFocus
          />
        </div>
        <div className="models-gallery-section py-5 bg-light mt-md-5 custom-section">
          <div className="px-2 models-content-main">
            <div className="models-box">
              <ul>
                {popularModels.map((model) => (
                  <li key={model.id}>{model.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemaleInfluencer;

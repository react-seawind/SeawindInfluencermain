import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/api.css";
import { Helmet } from "react-helmet";

export default function API() {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const headers = {
      "x-api-key": "123456789123456789",
    };

    axios
      .get("https://pro.seawindsolution.com/MODEL/Webservices/getBanner", {
        headers,
      })
      .then((res) => {
        setMyData(res.data.ResponseData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Influencer Market | API</title>
        <meta name="API" content="This is my page API." />
      </Helmet>
      <div>
        <pre>{JSON.stringify(mydata, null, 2)}</pre>
        {mydata.map((item) => {
          const { Title, Image } = item;
          return (
            <div className="card">
              <h2>{Title}</h2>
              <img className="img" src={Image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

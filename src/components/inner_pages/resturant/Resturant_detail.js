import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Resturant_detail.css";
import { Shimmer } from "react-shimmer";

function Resturant_detail() {
  const { id } = useParams();
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1998211&lng=72.84259399999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTE`
        );
        const restaurantData = response.data?.data?.cards[0]?.card?.card?.info;
        // console.log(id, restaurantData);
        setDatas(restaurantData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-5">
      {loading ? (
        // Shimmer effect while loading
        <>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="card resturant_card_img"
                  style={{
                    width: "20rem",
                    transition: "box-shadow 0.3s",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Shimmer width={410} height={480} /> {/* Shimmer for image */}
                </div>
              </div>
              <div className="col-lg-6 resturant_detail_left text-justify">
                <h2 className="">
                  <Shimmer className="my-3" width={250} height={30} />
                </h2>
                <hr />
                <h3>
                  {" "}
                  <Shimmer className="my-3" width={250} height={20} />
                </h3>
                <br />
                <h3>
                  {" "}
                  <Shimmer className="my-3" width={250} height={20} />
                </h3>
                <br />
                <h3>
                  {" "}
                  <Shimmer className="my-3" width={250} height={20} />
                </h3>
                <br />

                <h3>
                  {" "}
                  <Shimmer className="my-3" width={250} height={20} />
                </h3>
                <br />

                <h3>
                  {" "}
                  <Shimmer className="my-3" width={250} height={30} />
                </h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  datas?.cloudinaryImageId
                }
                alt={`${datas?.name} Image`}
                className="w-75 py-2 inner_img"
              />
            </div>
            <div className="col-lg-6 resturant_detail_left text-justify">
              <h2 className="">
                <strong>Resturant Details :</strong>
              </h2>
              <hr />
              <h3>Name : {datas?.name}</h3>
              <br />
              <h3>Locality : {datas?.locality}</h3>
              <br />
              <h3>City : {datas?.city}</h3>
              <br />

              <h3>Avg. Rating : {datas?.avgRatingString}</h3>
              <br />

              <h3>Cuisines list:</h3>
              <hr />
              <ul className="p-0 m-0">
                {datas?.cuisines?.map((cuisine, index) => (
                  <div key={index}>
                    <li> ✅: {cuisine}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resturant_detail;

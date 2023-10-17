import React, { useEffect, useState } from "react";
import "./Resturant_card.css";
import { Image, Shimmer } from "react-shimmer";
import axios from "axios";
import resturant_fetch_url from "./resturant/Resturant_data";
import { Link } from "react-router-dom";

function RestaurantCard() {
  const [restaurant, setRestaurant] = useState([]);
  const [filterrestaurant, setFilterRestaurant] = useState([]);
  const [searchResturant, setSearchResturant] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const res = await axios.get(resturant_fetch_url);
        console.log(res);
        const currentData =
          res.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (currentData) {
          setRestaurant(currentData);
          setFilterRestaurant(currentData);
          setLoading(false);
        } else {
          console.error("Data structure is not as expected.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    getRestaurant();
  }, []);

  const inputText = (event) => setSearchResturant(event.target.value);

  const filter_data = (name) => {
    if (name === "") {
      setFilterRestaurant(restaurant);
      setSearchResturant("");
    } else {
      const filteredRestaurants = restaurant.filter((item) => {
        return item.info.name.toLowerCase().includes(name.toLowerCase());
      });

      // If there are matching restaurants, update the filtered data
      if (filteredRestaurants.length > 0) {
        setFilterRestaurant(filteredRestaurants);
        setSearchResturant("");
      } else {
        // If no matching restaurants are found, display an alert
        alert(
          "We apologize, but it appears that the restaurant you are searching for is not currently available in our database. Please check the spelling and try again or explore our other options."
        );

        setSearchResturant("");
        setFilterRestaurant(restaurant);
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3 pb-5 justify-content-center ">
          <div className="col-lg-12 text-center  py-1">
            <h1 style={{ color: "#F28F0D" }}>
              🍲 <strong>Your Nearest Restaurants </strong> 🍲
            </h1>
          </div>
          <div className="col-lg-12 text-center bg-dark py-3">
            <input
              type="text"
              placeholder="search here..."
              className="p-1"
              onChange={inputText}
              value={searchResturant}
            />
            <button
              className="btn text-white  mx-4"
              style={{ background: "#F28F0D" }}
              onClick={() => filter_data(searchResturant)}
            >
              <strong>Search</strong>
            </button>
          </div>
          {loading ? (
            // Shimmer effect while loading
            <>
              {[...Array(4)].map((index) => (
                <div className="col-lg-3 my-3" key={index}>
                  <div
                    className="card resturant_card_img"
                    style={{
                      width: "20rem",
                      transition: "box-shadow 0.3s",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      src={"https://placehold.co/800/dddd/dddd/png"} // You can set a placeholder image source here
                      fallback={<Shimmer width={800} height={800} />} // Shimmer for image
                    />
                    <div className="card-body">
                      <Shimmer className="my-3" width={100} height={20} />{" "}
                      {/* Shimmer for title */}
                      <Shimmer className="my-3" width={120} height={15} />{" "}
                      {/* Shimmer for locality */}
                      <Shimmer
                        className="my-3"
                        width={150}
                        height={15}
                        count={2}
                      />{" "}
                      {/* Shimmer for cuisines */}
                      <Shimmer className="my-3" width={60} height={15} />{" "}
                      {/* Shimmer for isOpen */}
                      <Shimmer className="my-3" width={90} height={15} />{" "}
                      {/* Shimmer for totalRating */}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            filterrestaurant.map((element) => {
              const {
                id,
                name,
                locality,
                cloudinaryImageId,
                cuisines,
                isOpen,
                totalRatingsString,
              } = element.info;
              return (
                <div className="col-lg-3 my-3">
                  <Link to={`/resturant/${id}`}>
                    <div
                      class="card resturant_card_img"
                      style={{
                        width: "20rem",
                        transition: "box-shadow 0.3s",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                      key={id}
                    >
                      <img
                        class="card-img-top "
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                          cloudinaryImageId
                        }
                        alt={`${name} + Image`}
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          <strong>Name :</strong> {name}
                        </h5>
                        <p class="card-text">
                          <strong>Locality :</strong> {locality}
                        </p>
                        <p>
                          <strong>Cuisines : </strong>
                          <br />
                          {cuisines.map((element, index) => (
                            <span key={index} className=" ">
                              <span>{element} , </span>
                            </span>
                          ))}
                        </p>
                        <p>
                          <strong>Is Open : </strong>
                          {isOpen ? "Yes" : "No"}
                        </p>
                        <p>
                          <strong>Total Rating : </strong>
                          {totalRatingsString}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;

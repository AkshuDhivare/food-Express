import React from "react";
import ReactStars from "react-stars";

function MenuCard({ menuData }) {
  return (
    <>
      {menuData.map((element, index) => {
        const { image, name, category, price, desc } = element;
        return (
          <div
            className="col-lg-3 my-3 text-start"
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div class="card p-3">
              <img class="img-fluid W-25" src={image} alt={name} />
              <div class="card-body">
                <h5 class=" card-title">
                  <strong>{name}</strong>
                </h5>
                <h6 class=" card-text">{desc}</h6>
                <h6 class="py-2 card-text">{category}</h6>
                <h6 class=" card-text">{price}</h6>
                <h6>
                  <ReactStars size={30} half={true} value={5} edit={true} />
                </h6>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MenuCard;

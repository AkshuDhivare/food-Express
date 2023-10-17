import React from "react";
import Button from "@mui/material/Button";

function Menu_Filter_btn({ filter_data, filter_category }) {
  return (
    <>
      <section>
        <div className="container">
          <div className="row py-4 justify-content-evenly ">
            {filter_category.map((category, index) => {
              return (
                <div className="col-lg-2 my-2 " key={index}>
                  <Button
                    variant="contained"
                    onClick={() => filter_data(category)}
                  >
                    <strong>{category}</strong>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu_Filter_btn;

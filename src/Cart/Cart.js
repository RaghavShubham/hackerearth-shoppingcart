import React from "react";
import Box from "../Components/Box";
import Item from "../Components/Item";
import Data from "../Data/data";
import "./Cart.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Cart() {
  return (
    <div className="body">
      <div className="nav">
        <ArrowBackIosIcon />
        <h1 className="Order">Order Summary</h1>
      </div>
      <div className="lowerBody">
        <div className="list">
          <div className="thead">
            <p className="headItem">Items({Data.length})</p>
            <p className="headQty">Qty</p>
            <p className="headPrice">Price</p>
          </div>
          {Data.map((item) => (
            <div style={{ alignItems: "center", display: "flex" }} id={item.id}>
              <Item item={item} />
              <div className="counter">
                <IconButton
                  aria-label="remove"
                  color="black"
                  onClick={() => console.log("hi")}
                >
                  <RemoveIcon />
                </IconButton>
                <div className="qty">
                  <p style={{ margin: "0px", fontWeight: "500" }}>111</p>
                </div>
                <IconButton
                  aria-label="add"
                  color="black"
                  onClick={() => console.log("hi")}
                >
                  <AddIcon />
                </IconButton>
              </div>

              <p
                style={{ width: "10%", textAlign: "center", fontWeight: "500" }}
              >
                {"$" + item.price}
              </p>
            </div>
          ))}
        </div>
        <Box Data={Data} />
      </div>
    </div>
  );
}

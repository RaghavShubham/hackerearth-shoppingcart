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
  const [data, setData] = React.useState([]);
  const [boxData, setBoxData] = React.useState({
    items: data.length,
    price: 0,
    discount: 0,
    typeDiscount: 0,
    orderTotal: 0
  })
  React.useEffect(() => {
    setData(Data);
  },[])
  console.log(data);
  return (
    <div className="body">
      <div className="nav">
        <ArrowBackIosIcon />
        <h1 className="Order">Order Summary</h1>
      </div>
      <div className="lowerBody">
        <div className="list">
          <div className="thead">
            <p className="headItem">Items({data.length})</p>
            <p className="headQty">Qty</p>
            <p className="headPrice">Price</p>
          </div>
          {data.map((item) => { 
            setBoxData(prev => ({
              ...prev,
              items: boxData.items + 1,
              price: boxData.price + item.price,
              discount: boxData.discount + (item.price * item.discount/100),
              typeDiscount: boxData.typeDiscount + item.type === "fiction" ? item.price * 0.15 : 0,
              orderTotal: boxData.price - boxData.discount - boxData.typeDiscount
            }))
            return(
            <div style={{ alignItems: "center", display: "flex" }} key={item.id}>
              <Item item={item} />
              <div className="counter">
                <IconButton
                  aria-label="remove"
                  color="default"
                  onClick={() => console.log("hi")}
                >
                  <RemoveIcon />
                </IconButton>
                <div className="qty">
                  <p style={{ margin: "0px", fontWeight: "500" }}>111</p>
                </div>
                <IconButton
                  aria-label="add"
                  color="default"
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
          )})}
        </div>
        <Box Data={boxData} />
      </div>
    </div>
  );
}

import React from "react";
import Box from "../Components/Box";
import Item from "../Components/Item";
import "./Cart.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Button, Snackbar } from "@material-ui/core";

function Cart({ increase, decrease, items, addProduct }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="body">
      <div className="nav">
        <ArrowBackIosIcon />
        <h1 className="Order">Order Summary</h1>
      </div>
      <div className="lowerBody">
        <div className="list">
          <div className="thead">
            <p className="headItem">Items({items.length})</p>
            <p className="headQty">Qty</p>
            <p className="headPrice">Price</p>
          </div>
          {items.length ? (
            items.map((item, index) => (
              <div
                style={{ alignItems: "center", display: "flex" }}
                key={item.id}
              >
                <Item index={index} setOpen={setOpen} />
                <div className="counter">
                  <IconButton
                    aria-label="remove"
                    color="default"
                    onClick={() => item.quantity > 1 && decrease(item.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <div className="qty">
                    <p style={{ margin: "0px", fontWeight: "500" }}>
                      {item.quantity}
                    </p>
                  </div>
                  <IconButton
                    aria-label="add"
                    color="default"
                    onClick={() => increase(item.id)}
                  >
                    <AddIcon />
                  </IconButton>
                </div>

                <p
                  style={{
                    width: "10%",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {"$" + item.price}
                </p>
              </div>
            ))
          ) : (
            <Button
              variant="outlined"
              style={{ margin: "auto" }}
              onClick={() => addProduct()}
            >
              Reset
            </Button>
          )}
        </div>
        <Box />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={1000}
          open={open}
          onClose={handleClose}
          message="Item Removed from Cart"
        ></Snackbar>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (id) => dispatch({ type: actions.INCREASE, id }),

  addProduct: (item) => dispatch({ type: actions.ADD_ITEM, item }),

  decrease: (id) => dispatch({ type: actions.DECREASE, id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

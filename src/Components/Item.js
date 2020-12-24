import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { REMOVE_ITEM } from "../redux/actions";
import { connect } from "react-redux";

function Item({ items, index, removeProduct }) {
  return (
    <div className="item">
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <img
          src={items[index].img_url}
          style={{ width: "40px", height: "40px" }}
          alt="item"
        />
        <p style={{ margin: "0px 10px" }}>{items[index].name}</p>
      </div>
      <IconButton
        aria-label="delete"
        color="default"
        onClick={() => removeProduct(items[index].id)}
      >
        <ClearIcon />
      </IconButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (id) => dispatch({ type: REMOVE_ITEM, id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

export default function Item({ item }) {
  return (
    <div className="item">
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <img
          src={item.img_url}
          style={{ width: "40px", height: "40px" }}
          alt="item"
        />
        <p style={{ margin: "0px 10px" }}>{item.name}</p>
      </div>
      <IconButton aria-label="delete" color="default" onClick={() => console.log("hi")}>
        <ClearIcon />
      </IconButton>
    </div>
  );
}

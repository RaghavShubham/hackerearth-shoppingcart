import React from "react";
import { connect } from "react-redux";

function Box({ itemCount, total, discount, typeDiscount }) {
  return (
    <div className="box">
      <p style={{ fontWeight: "bold" }}>Total</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="word" style={{ margin: "10px 0px" }}>
          Items({itemCount})
        </p>
        <p>:</p>
        <p className="cost">$ {total}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="word">Discount</p>
        <p>:</p>
        <p className="cost">-$ {discount}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="word">Type Discount</p>
        <p>:</p>
        <p className="cost">-$ {typeDiscount}</p>
      </div>
      <div className="total">
        <p>Order Total</p>
        <p>$ {total - discount - typeDiscount}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: state.itemCount,
  total: state.total,
  discount: state.discount,
  typeDiscount: state.typeDiscount,
});

export default connect(mapStateToProps)(Box);

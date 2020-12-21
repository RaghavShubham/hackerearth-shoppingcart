import React from 'react'

export default function Box({ Data }) {
    return (
        <div className="box">
          <p style={{fontWeight: "bold"}}>Total</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word" style={{margin: "10px 0px"}}>Items({Data.items})</p>
            <p>:</p>
            <p className="cost">$ {Data.price}</p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word">Discount</p>
            <p>:</p>
            <p className="cost">-$ {Data.discount}</p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word">Type Discount</p>
            <p>:</p>
            <p className="cost">-$ {Data.typeDiscount}</p>
          </div>
          <div className="total">
            <p>Order Total</p>
            <p>$ {Data.orderTotal}</p>
          </div>
        </div>
    )
}

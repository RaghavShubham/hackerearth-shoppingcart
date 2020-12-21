import React from 'react'

export default function Box({ Data }) {
    return (
        <div className="box">
          <p style={{fontWeight: "bold"}}>Total</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word" style={{margin: "10px 0px"}}>Items({Data.length})</p>
            <p>:</p>
            <p className="cost">$ 135</p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word">Discount</p>
            <p>:</p>
            <p className="cost">-$ 13</p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="word">Type Discount</p>
            <p>:</p>
            <p className="cost">-$ 2</p>
          </div>
          <div className="total">
            <p>Order Total</p>
            <p>$ 120</p>
          </div>
        </div>
    )
}

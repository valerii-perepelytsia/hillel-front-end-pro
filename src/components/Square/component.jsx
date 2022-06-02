import React from "react";

const SquareComponent = ({ digit, onIncrease, onDecrease}) => (
    <div className="squares__square-container">
        <article className="squares__article">
            <h2 className="squares__digit">{digit}</h2>
            <div className="squares__button-container">
                <button type="button" className="squares__button" onClick={onIncrease}>+</button>
                <button type="button" className="squares__button" onClick={onDecrease}>-</button>
            </div>
        </article>
    </div>
)

export default SquareComponent
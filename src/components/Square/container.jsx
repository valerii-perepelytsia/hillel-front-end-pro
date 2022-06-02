import React, {useState} from 'react';

import SquareComponent from "./component";

import './styles.scss';

const Square = () => {
    const [Digit, setDigit] = useState(0);

    return (
        <SquareComponent
            digit={Digit}
            onIncrease={() => setDigit(Digit + 1)}
            onDecrease={() => setDigit(Digit - 1)}
        />
    )
}

export default Square
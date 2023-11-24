import React from "react";
import ReactDOM from "react-dom";
function SecondsCounter(props) {
    const { digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix } = props;
    return (
        <div className="main-counter">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{digitSix}</div>
            <div className="five">{digitFive}</div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
}

let counter = 0;

setInterval(() => {
    const six = Math.floor((counter / 1000000) % 10);
    const five = Math.floor((counter / 100000) % 10);
    const four = Math.floor((counter / 10000) % 10);
    const three = Math.floor((counter / 1000) % 10);
    const two = Math.floor((counter / 100) % 10);
    const one = Math.floor((counter / 10) % 10);
    counter++

    ReactDOM.render(
        <SecondsCounter
            digitOne={one}
            digitTwo={two}
            digitThree={three}
            digitFour={four}
            digitFive={five}
            digitSix={six}
        />
        , document.querySelector("#app")
    );
}, 1000);
export default SecondsCounter;
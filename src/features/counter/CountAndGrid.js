import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    calcSum, box1Switch, box2Switch, box3Switch, box4Switch,
    selectCount, selectBox1Color, selectBox2Color, selectBox3Color, selectBox4Color
} from './countAndGridSlice';
import Box from "../box/Box";

// This helper function converts 0 to a text suffix that changes the color of the boxes
function zeroOneToWhiteBlack(color) {
    if (color === 0) {
        return " white";
    } else {
        return " black";
    }
}

export function CountAndGrid() {

    const count = useSelector(selectCount);
    let box1Color = useSelector(selectBox1Color), box2Color = useSelector(selectBox2Color),
        box3Color = useSelector(selectBox3Color), box4Color = useSelector(selectBox4Color);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        count: 0,
        box1Color: 0,
        box2Color: 0,
        box3Color: 0,
        box4Color: 0
    });

    return (
        <div className="page">
            <div className="counter">
                Count: {count}
            </div>
            <div className={"box1" + zeroOneToWhiteBlack(box1Color)}
                 onClick={() => {
                     dispatch(box1Switch());
                     dispatch(calcSum());
                 }}>
                <Box key={1}/>
            </div>
            <div className={"box2" + zeroOneToWhiteBlack(box2Color)}
                 onClick={() => {
                     dispatch(box2Switch());
                     dispatch(calcSum());
                 }}>
                <Box key={2}/>
            </div>
            <div className={"box3" + zeroOneToWhiteBlack(box3Color)}
                 onClick={() => {
                     dispatch(box3Switch());
                     dispatch(calcSum());
                 }}>
                <Box key={3}/>
            </div>
            <div className={"box4" + zeroOneToWhiteBlack(box4Color)}
                 onClick={() => {
                     dispatch(box4Switch());
                     dispatch(calcSum());
                 }}>
                <Box key={4}/>
            </div>
        </div>
    );
}

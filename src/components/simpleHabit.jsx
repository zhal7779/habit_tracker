import React, {useCallback, useEffect, useRef, useState } from 'react';

//리액트 훅 

const SimpleHabit = () => {
    const {count, setCount} = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1 );
    });

    useEffect(()=> {
        console.log(`mounted&updated! : ${count}`);
    },[]); // 두번째 인자에 텅텅 비어있는 배열을 전달하면 처음에만 호출된다. 또는 비어있는 배열에 원하는 데이터를 넣으면 해당 데이터가 변경될때만 호출된다.

    return (
        <li className="habit">
            <span ref={spanRef}  className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
            className="habit-button habit-increase"
            onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );

};

export default SimpleHabit;

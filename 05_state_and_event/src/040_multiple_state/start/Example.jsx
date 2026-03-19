import { useState } from "react";
const Example = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(10);
    const [countC, setCountC] = useState(100);
    const [countD, setCountD] = useState(1000);

    // いずれかのカウントが9の倍数ならコンソールにログ
    if (countA % 9 === 0 || countB % 9 === 0 || countC % 9 === 0 || countD % 9 === 0) {
        console.log("multiple of 9 detected");
    }
  return (
    <>
    <p>ボタンAを{countA}回押しました!</p>
    <button onClick = {() => {
        setCountA(countA + 1);
    }}>ボタンA</button>

    <p>ボタンBを{countB}回押しました!</p>
    <button onClick = {() => {
        setCountB(countB + 1);
    }}>ボタンB</button>

    <p>ボタンCを{countC}回押しました!</p>
    <button onClick = {() => {
        setCountC(countC + 1);
    }}>ボタンC</button>

    <p>ボタンDを{countD}回押しました!</p>
    <button onClick = {() => {
        setCountD(countD + 1);
    }}>ボタンD</button>
    </>
  )
};


export default Example;

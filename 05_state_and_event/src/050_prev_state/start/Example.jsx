import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const plusnum = () => {
        setCount(count + 1);
    }
    const minusnum = () => {
        setCount(count -1);
    }
  return (
    <>
    <p>現在のカウント数：{count}</p>
    <button onClick={plusnum}>+</button>
    <button onClick={minusnum}>-</button>
    </>
  )
};

export default Example;

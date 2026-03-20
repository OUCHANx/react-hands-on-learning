import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
    const [count, setCount] = useState(0);

  const toggleComponent = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
    <button onClick={toggleComponent}>Toggle</button>
    <Count key = "A" title="A" count = {count}
    setCount = {setCount}/>
    <Count key = "B" title="B" count = {count}
    setCount = {setCount}/>
    </>
  )
}
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

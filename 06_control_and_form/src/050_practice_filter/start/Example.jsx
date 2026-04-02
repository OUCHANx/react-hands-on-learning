import Profile from "./components/Profile";
import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterval, setFilterval] = useState("");
  return (
    <>
      <h3>練習問題</h3>
      <p>入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。</p>
      <input type ="text" value={filterval} onChange={
        (e) => setFilterval(e.target.value)}
        />
      <ul>
        {persons
        .filter((person) => person.name.indexOf(filterval) !== -1)
        //trueのもののみmapに渡す
        .map((person) => {
          return <li key = {person.name}>
            <Profile name={person.name} age={person.age} hobbies={person.hobbies} />
          </li>
          // if (person.name === "Geo"){
          //   return <li key ={person.name}>{person.name}★</li>
          // }else {
          //   return <li key={person.name}>{person.name}</li>
          // }
        })}
        </ul>
    </>
  );
};

export default Example;

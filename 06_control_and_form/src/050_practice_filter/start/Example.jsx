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
      <ul>
        {persons
        .filter(person => {
          const isMatch = person.name.indexOf(filterval) !== -1;
          return isMatch;
        })
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;

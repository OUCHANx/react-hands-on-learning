import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterval, setFilterval] = useState("");
  // console.log(animals.filter(animal => animal === "Dog"));
  return (
    <>
      <h3>配列のフィルター</h3>
  <input type="text" value={filterval} onChange={(e)=>
    setFilterval(e.target.value)} />
      <ul>
        {animals
        .filter((animal) => animal.indexOf(filterval) !== -1)
        .map((animal) => (<li key = {animal}>{animal}</li>))
        }
      </ul>
    </>
  );
};

export default Example;
//indexOfは、文字列の中に特定の文字列が存在するかどうかを
// 調べるためのメソッドです。存在する場合は、その文字列の最初の
// 位置を返し、存在しない場合は-1を返します。上記のコードでは、
// filtervalがanimalの中に含まれているかどうかを確認しています。
//ーーーーーーーーーーーーーーーー
//mapはどういうときに使いたいか
//配列をjsxのリストに変換するときに使う

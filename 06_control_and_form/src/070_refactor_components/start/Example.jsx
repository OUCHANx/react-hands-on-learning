import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";
const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          });
  return (
    <>
      <AnimalList animals = {filteredAnimals}/>
      <AnimalFilter filterState ={[filterVal, setFilterVal]}/>
    </>
  );
};

export default Example;

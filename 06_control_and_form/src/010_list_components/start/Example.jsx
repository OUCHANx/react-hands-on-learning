
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // const HelloAnimals = animals.map((animal) => <li>Hello!
  // {animal}</li>)
  return (
    <>
      <ul>
      <h3>配列の操作</h3>
      {animals.map((animal) => <li key={animal}>Hello!
        {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;

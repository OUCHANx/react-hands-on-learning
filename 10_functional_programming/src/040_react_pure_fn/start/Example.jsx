let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>
}
const ChildPure = ({value}) => {
  return <div>{value}</div>
  //このコンポーネントは純粋関数でかけていることになる
}

const Example = () => {
  let value = 0;
  return (
    <>
    <ChildPure value = {++value}/>
    <ChildPure value = {++value}/>
    <ChildPure value = {++value}/>
    </>
  );
};

export default Example;

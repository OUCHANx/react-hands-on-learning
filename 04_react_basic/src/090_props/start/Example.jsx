import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    const o = {
        color: "red",
        num: 123
    }
  return (
  <>
  <Child 
  { ...o }
  fn = {hello}
  bool
  obj = {{ name: "Tom", age: 20 }}
  />
  </>
  );
}

export default Example;
//関数も渡すことができる　例えばhelloという関数を定義して、引数で
//受け取った値を返すようにして、Childコンポーネントにfnという
// propsで渡すと、Childコンポーネント内でfn("React")とすることで、
// hello関数が呼び出されて"Hello React"という文字列が
// 表示されるようになります。

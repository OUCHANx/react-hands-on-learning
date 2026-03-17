const Hello = (props) => {
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
//configurableは隠し設定を変更できない
//writableがfalseの場合は値を変更できない
//

import { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import "./TodoInput.css";
const dummyValues = [
  { value: "Car Wash", key: 1 },
  { value: "Udemy", key: 2 },
  { value: "Exercise", key: 3 },
];
const TodoInput = () => {
  const [todoValue, setTodoValue] = useState(dummyValues);
  const [typeValue, setTypeValue] = useState("");

  const onListHandler = (event) => {
    event.preventDefault();
    let listValue = {
      value: typeValue,
      key: Math.random(),
    };
    setTodoValue((prevTodoValue) => {
      return [listValue, ...prevTodoValue];
    });
    setTypeValue("");
  };

  const onChangeHandler = (event) => {
    setTypeValue(event.target.value);
  };
  const onDeleteHandler = (keyArray) => {
    todoValue.map((totVal) => {
      totVal.key === keyArray && todoValue.splice(todoValue.indexOf(totVal), 1);
      return true;
    });
    console.log(keyArray);
  };
  return (
    <div>
      <div>
        <form onSubmit={onListHandler}>
          <input type="text" value={typeValue} onChange={onChangeHandler} />
          <input type="submit" />
        </form>
      </div>
      <div className="list-display">
        <TodoDisplay values={todoValue} deleteList={onDeleteHandler} />
      </div>
    </div>
  );
};

export default TodoInput;

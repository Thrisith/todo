import { useRef, useState } from "react";
import TodoDisplay from "./TodoDisplay";
import "./TodoInput.css";
const dummyValues = [
  { value: "Car Wash", key: 1 },
  { value: "Udemy", key: 2 },
  { value: "Exercise", key: 3 },
];
const TodoInput = () => {
  const [todoValue, setTodoValue] = useState(dummyValues);
  const valueInputRef = useRef();

  const onListHandler = (event) => {
    event.preventDefault();
    const typeValue = valueInputRef.current.value;

    if (typeValue === "") {
      alert("Todo Input Can't Be Empty");
    } else {
      let listValue = {
        value: typeValue,
        key: Math.random(),
      };
      setTodoValue((prevTodoValue) => {
        return [listValue, ...prevTodoValue];
      });
    }
    valueInputRef.current.value = "";
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
          <input type="text" placeholder="Todo Here :)" ref={valueInputRef} />
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

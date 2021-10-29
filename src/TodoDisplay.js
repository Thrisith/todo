import { useState } from "react/cjs/react.development";
import "./TodoDisplay.css";
const TodoDisplay = (props) => {
  const [keyDeletion, setKeyDeletion] = useState();
  const onDelete = (onKey) => {
    setKeyDeletion(onKey);
  };
  props.deleteList(keyDeletion);
  return props.values
    .map((totvalue) => (
      <div className="list-elements">
        <p>{totvalue.value}</p>
        <button onClick={() => onDelete(totvalue.key)}>Done</button>
      </div>
    ));
};

export default TodoDisplay;

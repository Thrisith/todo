import "./TodoDisplay.css"
const TodoDisplay = (props) =>
{
    console.log(props.values);
    return(
        props.values.map(totvalue =>
            <p className="list-element">{totvalue.value}</p>
            )
        );
}

export default TodoDisplay;
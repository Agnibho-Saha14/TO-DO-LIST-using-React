import React from "react";
function ToDoItem(props) {
  function handleClick() {}
  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li>{props.name}</li>
    </div>
  );
}
export default ToDoItem;

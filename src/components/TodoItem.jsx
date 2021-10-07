import { useEffect, useState } from "react";
import "./TodoItem.css";

/*export const TodoItem = ({ name }) => {
  const [isDone, setIsDone] = useState(false);
  const eventClick = () => {
    setIsDone(!isDone);
  };
  const itemClassName = isDone ? "done" : "";
  return (
    <div className={itemClassName}>
      <li onClick={eventClick}>{name}</li>
    </div>
  );
};*/

// Jans Version:

export const TodoItem = ({ name }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li
      onClick={() => {
        setIsDone(!isDone);
      }}
      className={isDone ? "TodoItem TodoItem--is-done" : "TodoItem"}
    >
      {name}
    </li>
  );
};

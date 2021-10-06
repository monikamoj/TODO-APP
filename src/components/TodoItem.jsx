import { useState } from "react";

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
    className={isDone ? "done" : ""}
    >
      {name}
    </li>
  );
};

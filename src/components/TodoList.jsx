import { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { getItem, setItem } from "../utils/localStorage";

const useLocalStorageState = ( )=> {
  const [state, setState] = use
}

export const TodoList = () => {
  const [todos, setTodos] = useState(
    getItem("todos", [
      { id: 0, name: " Hecke schneiden " },
      { id: 1, name: " Putzen " },
      { id: 2, name: " Einkaufen " },
    ])
  );

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem key={id} name={name} />
        ))}
      </ul>
      <CreateTodo
        onCreate={(newTodo) => {
          const id = todos.length;
          const newTodoObject = {
            id,
            name: newTodo,
          };

          setTodos([...todos, newTodoObject]);
          todos.push(newTodoObject);
          console.log(todos);
        }}
      />
    </>
  );
};

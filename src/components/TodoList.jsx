import { useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 0, name: " Hecke schneiden " },
    { id: 1, name: " Putzen " },
    { id: 2, name: " Einkaufen " },
  ]);

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem key={id} name={name} />
        ))}
      </ul>
      <CreateTodo
        onCreate={(newTodo) => {
          const id = todos.lenght;
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

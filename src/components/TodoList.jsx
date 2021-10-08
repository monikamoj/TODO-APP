import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../utils/localStorage";

const useTodos = () => {
  const [todos, setTodos] = useLocalStorageState("todos", []);

  const addTodo = (name) => {
    setTodos([...todos, { id: todos.length, name }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
};

export const TodoList = () => {
  const { todos, addTodo, removeTodo } = useTodos();

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem
            key={id}
            id={id}
            name={name}
            onRemove={() => removeTodo(id)}
          />
        ))}
      </ul>
      <CreateTodo onCreate={(name) => addTodo(name)} />
    </>
  );
};

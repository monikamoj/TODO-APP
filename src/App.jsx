import { TodoList } from "./components/TodoList";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <h3>ToDo</h3>
      <TodoList />
    </div>
  );
};

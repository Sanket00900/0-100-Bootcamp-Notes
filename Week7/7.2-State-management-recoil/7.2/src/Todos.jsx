import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  titleAtom,
  descriptionAtom,
  todosAtom,
  filterTodosSelector,
  filterAtom,
} from "./store/atoms/todos.js";

function Todos() {
  return (
    <div>
      <AddTodo />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

function AddTodo() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const setTodoList = useSetRecoilState(todosAtom);

  const addTodo = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { title, description, id: oldTodoList.length + 1 },
    ]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

function TodoFilter() {
  const [filterText, setFilterText] = useRecoilState(filterAtom);

  return (
    <div>
      <h2>Filter Todos</h2>
      <label>
        Filter by Title/Description:
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </label>
    </div>
  );
}

function TodoList() {
  const filteredTodos = useRecoilValue(filterTodosSelector);
  const todoList = useRecoilValue(todosAtom);

  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}:</strong> {todo.description}
          </li>
        ))}
      </ul>

      <h2>Filtered Todos</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}:</strong> {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;

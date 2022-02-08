import { useState } from "react";

import { TodoModel } from "../models/TodoModel";

import "../css/App.css";

function App() {
  const [todoItems, setTodoItems] = useState<Array<TodoModel>>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    // add a new TodoModel to the array
    const newTodo = new TodoModel(inputText);
    setTodoItems([...todoItems, newTodo]);
  };

  return (
    <div className="App" style={{ padding: 50 }}>
      {todoItems.map((todoItem, index) => {
        return (
          <div
            style={{
              padding: 5,
              margin: 5,
              border: "1px solid black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <span
              style={{
                textDecoration: todoItem.completed ? "line-through" : "",
              }}
            >
              {todoItem.text} - {todoItem.completed.toString()}
            </span>
            <button
              onClick={() => {
                if (todoItem.completed) return; // if the todo is already completed, do nothing
                todoItem.markComplete(); // mark the todoItem as completed
                setTodoItems([...todoItems]); // update the state
              }}
              disabled={todoItem.completed}
            >
              Complete
            </button>
          </div>
        );
      })}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;

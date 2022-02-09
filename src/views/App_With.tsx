import { useState } from "react";

import { TodoModel } from "../models/TodoModel";

import "../css/App.css";

function App() {
  const [todoItems, setTodoItems] = useState<Array<TodoModel>>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    // add a new TodoModel to the array
    setTodoItems([...todoItems, new TodoModel(inputText)]);
  };

  const deleteTodo = (id: number) => {
    // filter out the item with the given id
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
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
              alignItems: "center",
            }}
            key={index}
          >
            <small>{todoItem.id}</small>
            {todoItem.editing ? (
              <input
                value={todoItem.text}
                onChange={(e) => {
                  todoItem.editTodo(e.target.value);
                  setTodoItems([...todoItems]);
                }}
              />
            ) : (
              <span
                style={{
                  textDecoration: todoItem.completed ? "line-through" : "",
                }}
              >
                {todoItem.text}
              </span>
            )}
            <div>
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
              <button
                onClick={() => {
                  deleteTodo(todoItem.id); // delete the todoItem
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  todoItem.toggleEditing(); // toggle the editing state
                  setTodoItems([...todoItems]); // update the state
                }}
              >
                {todoItem.editing ? "Save" : "Edit"}
              </button>
            </div>
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

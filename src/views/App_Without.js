import React, { useState, useContext } from "react";

import "../css/App.css";

const TodoContext = React.createContext();

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, text };
        }
        return todoItem;
      })
    );
  };

  const addTodo = () => {
    // add a new TodoModel to the array
    setTodoItems([
      ...todoItems,
      { id: Math.random(), text: inputText, completed: false },
    ]);
  };

  const completeTodo = (id) => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ editTodo, deleteTodo, completeTodo }}>
      <div className="App" style={{ padding: 50 }}>
        {todoItems.map((todoItem, index) => {
          return <TodoItem todoItem={todoItem} key={index} />;
        })}
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </TodoContext.Provider>
  );
}

const TodoItem = ({ todoItem }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todoItem.text);

  const { editTodo, deleteTodo, completeTodo } = useContext(TodoContext);

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
      key={todoItem.id}
    >
      <small>{todoItem.id}</small>
      {editing ? (
        <input
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
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
          onClick={() => completeTodo(todoItem.id)}
          disabled={todoItem.completed}
        >
          Complete
        </button>
        <button
          onClick={() => {
            deleteTodo(todoItem.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            if (editing) {
              setEditing(false);
              editTodo(todoItem.id, editText);
            } else {
              setEditing(!editing);
            }
          }}
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

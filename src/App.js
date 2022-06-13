import React, { useState } from "react";
import TodoList from "./componets/TodoList";
import InputField from "./componets/InputField";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "./store/todoslice";

import "./App.css";

function App() {
  const [text, setText] = useState("");

  const dispath = useDispatch()
  const addTask = (e) => {
    {dispath(addTodo({text}))}
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;

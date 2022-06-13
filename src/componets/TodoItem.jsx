import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeTodo, toggleTodoComplete } from "../store/todoslice";

const TodoItem = ({ id, comleted, text }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <li key={id}>
        <input
          type="checkbox"
          checked={comleted}
          onChange={() => dispatch(toggleTodoComplete({ id }))}
        />
        <span>{text}</span>
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </li>
    </li>
  );
};

export default TodoItem;

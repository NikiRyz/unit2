import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./TodoList";
const destination = document.getElementById("container");
ReactDOM.render(
  <div>
    <ToDoList />
  </div>,
  destination
);

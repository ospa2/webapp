'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/index";
import { RootState, AppDispatch } from "@/store/store";
import { toggleTodo, deleteTodo } from "@/store/index";
const NewsCard = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();
  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
    console.log(todos);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="text-black"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NewsCard;

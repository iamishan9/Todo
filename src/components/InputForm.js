import React from "react";

const InputForm = props => {
  return (
    <form onSubmit = { props.handleNewItem} className = "todoInput">
      <input 
        className="input"
        type="text"
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="Add a task"
      />
      <button type="submit" name="submit" value="submit">
      +
      </button>
    </form>
  );
};

export default InputForm;


import React from "react";

const Button = props => {
  if (props.isEditing) {
    return (
      <button className="action" onClick={props.toggleEditing}>
        save
      </button>
    );
  }
  return (
    <>
    <button className="action" onClick={props.toggleDone}>  
      ✔
    </button>
    <button className="action" onClick={props.handleRemove}>
      ✖
    </button>
    </>
  );
};

export default Button;

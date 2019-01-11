import React from "react";

const ItemName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }
  return <span onClick={props.toggleEditing}>{props.children}</span>;
};


export default ItemName;



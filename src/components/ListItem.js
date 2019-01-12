import React from 'react';

import Button from './Button';
import ItemName from './ItemName';

const ListItem = props => {
  return (
    <li>
      <ItemName
        isEditing={props.isEditing}
        isDone={props.isDone}
        item={props.item}
        toggleEditing={props.toggleEditing}
        toggleDone={props.toggleDone}
        handleNameEdits={e => props.setName(e.target.value)}
      >
        {props.item}
      </ItemName>
      <Button
        isEditing={props.isEditing}
        isDone={props.isDone}
        toggleEditing={props.toggleEditing}
        handleRemove={props.handleRemove}
        toggleDone={props.toggleDone}
      />
    </li>
  );
};

export default ListItem;

import React from 'react';

import ListItem from './ListItem';

const List = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          isEditing={item.isEditing}
          isDone={item.isDone}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleEditing={() => props.toggleEditing(item.id)}          
          toggleDone={() => props.toggleDone(item.id)}
          setName={text => props.editItemAt(text, item.id)}
        />
      ))}
    </ul>
  );
};

export default List;

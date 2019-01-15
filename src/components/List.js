import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

/**
 *
 *
 * @param {*} props
 * @returns
 */
const List = props => {
  return (
    <ul>
      {props.list.map(item => (
        <ListItem
          key={item.id}
          item={item.name}
          isEditing={item.isEditing}
          isDone={item.isDone}
          handleRemove={() => props.removeItemById(item.id)}
          toggleEditMode={() => props.toggleEditMode(item.id)}
          toggleDone={() => props.toggleDone(item.id)}
          setName={text => props.editItem(text, item.id)}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeItemById: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

export default List;

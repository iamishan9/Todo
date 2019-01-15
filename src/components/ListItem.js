import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import ItemName from './ItemName';

/**
 *
 *
 * @param {*} props
 * @returns
 */
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

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  isDone: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired
};


export default ListItem;

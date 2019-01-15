import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @param {*} props
 * @returns
 */
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

ItemName.propTypes = {
  item: PropTypes.string.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default ItemName;



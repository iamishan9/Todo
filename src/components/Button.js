import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @param {*} props
 * @returns
 */
const Button = props => {
  if (props.isEditing) {
    return (
      <button className="action" onClick={props.toggleEditMode}>
        save
      </button>
    );
  }
  if (props.isDone) {
    return (
      <>
        <button className="action" onClick={props.toggleDone}>
          ✅
        </button>
        <button className="action" onClick={props.handleRemove}>
          ✖
        </button>
      </>
    );
  }
  if (!props.isDone) {
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
  }
};

Button.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Button;

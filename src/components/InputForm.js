import React from 'react';
import PropTypes from 'prop-types';


/**
 *
 *
 * @param {*} props
 * @returns
 */
const InputForm = props => {
  return (
    <form onSubmit = { props.handleNewItemAddition} className = "todoInput">
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

InputForm.propTypes = {
  handleNewItemAddition: PropTypes.func.isRequired,
  handleItemInput: PropTypes.func.isRequired,
  pendingItem: PropTypes.string.isRequired
};

export default InputForm;


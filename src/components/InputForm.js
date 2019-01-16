import React from 'react';
import PropTypes from 'prop-types';

/**
 * Form to add new todo.
 *
 * @class InputForm
 * @extends {React.Component}
 */
class InputForm extends React.Component {
  /**
   * Creates an instance of InputForm.
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      pendingItem: ''
    };
  }

  /**
   *
   *
   * @param {*} e
   */
  handleItemInput = e =>
    this.setState({
      pendingItem: e.target.value
    });


  /**
   *
   *
   * @param {*} e
   */
  handleNewItemAddition = e => {
    e.preventDefault();
    if (this.isItemValid(this.state.pendingItem)) {
      this.props.updateTodo(this.state.pendingItem);
      this.setState({ 
        pendingItem: '' 
      });
    }
  };

  /**
   *
   *
   * @param {*} item
   *
   */
  isItemValid = item => {
    if (item && item !== null && [...item].some(letter => letter !== ' ')) {
      return true;
    }
  };

  /**
 *
 *
 * @returns
 */
  render() {
    return (
    <>
      <form onSubmit={this.handleNewItemAddition} className="todoInput">
        <input
          className="input"
          type="text"
          onChange={this.handleItemInput}
          value={this.state.pendingItem}
          placeholder="Add a task"
        />
        <button type="submit" name="submit" value="submit">
          +
        </button>
      </form>
    </>
    );
  }
}

InputForm.propTypes = {
  updateTodo: PropTypes.func.isRequired
};

export default InputForm;

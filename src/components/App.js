import React, { Component } from 'react';

import List from './List';
import Tabs from './Tabs';
import TABS from '../constant';
import InputForm from './InputForm';
import * as storageUtil from '../utils/Storage.js';

/**
 * This is the main class.
 */
class App extends Component {
  lastItemId = 0;

  /**
   * Creates an instance of App.
   *
   * @param {object} props Props from the parent.
   */
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      activeTab: TABS.HOME
    };
  }

  componentDidUpdate = () => {
    storageUtil.set(this.state.list);
  };

  componentDidMount = () => {
    const list = storageUtil.get();

    if (list && list.length) {
      this.setState({
        list
      });
    }
  };

  newItemId = () => {
    const id = this.lastItemId;

    this.lastItemId += 1;

    return id;
  };

  /**
   *
   *
   * @param {number} id
   */
  toggleEditMode = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item.isEditing
          };
        }

        return item;
      })
    });
  };

  /**
   *
   *
   * @param {*} id
   */
  toggleDone = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isDone: !item.isDone
          };
        }

        return item;
      })
    });
  };

  /**
   *
   *
   * @param {*} id
   */
  removeItemById = id => {
    this.setState({
      list: this.state.list.filter(item => id !== item.id)
    });
  };

  /**
   *
   *
   * @param {*} name
   * @param {*} id
   */
  editItem = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }

        return item;
      })
    });
  };

  /**
   *
   *
   * @param {*} view
   */
  setSelectedTab = view => {
    this.setState({
      activeTab: view
    });
  };

  /**
   *
   *
   * @returns {Array} Returns the array of list.
   */
  getFilteredTodoList = () => {
    switch (this.state.activeTab) {
      case TABS.HOME:
        return this.state.list;

      case TABS.COMPLETED:
        return this.state.list.filter(item => item.isDone);

      case TABS.REMAINING:
        return this.state.list.filter(item => !item.isDone);

      default:
        return this.state.list;
    }
  };

  /**
   * Add new todo to the start of array.
   *
   * @param {object} receivedItem Todo item from the TodoForm.
   */
  updateTodoList = receivedItem => {
    const id = this.newItemId();

    this.setState({
      list: [
        ...this.state.list,
        {
          name: receivedItem,
          isEditing: false,
          isDone: false,
          id
        }
      ]
    });
  };

  /**
   *
   *
   * @returns
   */
  render() {
    return (
      <div className="wrapper">
        <div className="title">My Todo List</div>
        <Tabs setSelectedTab={this.setSelectedTab} activeTab={this.state.activeTab} />
        <InputForm
          updateTodo={this.updateTodoList}
          // handleItemInput={this.handleItemInput}
          // pendingItem={this.state.pendingItem}
        />

        <List
          list={this.getFilteredTodoList()}
          removeItemById={this.removeItemById}
          toggleDone={this.toggleDone}
          toggleEditMode={this.toggleEditMode}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

export default App;

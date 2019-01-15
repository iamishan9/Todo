import React, { Component } from 'react';

import List from './List';
import Tabs from './Tabs';
import TABS from '../constant';
import InputForm from './InputForm';

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
      pendingItem: '',
      activeTab: TABS.HOME
    };
  }

  componentDidUpdate = () => {
    const arrayList = this.state.list;

    localStorage.setItem('list', JSON.stringify(arrayList));
  };

  componentDidMount = () => {
    const list = JSON.parse(localStorage.getItem('list'));

    if (list !== null) {
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
   * @param {*} id
   */
  toggleEditing = id => {
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
  removeItemAt = id => {
    this.setState({
      list: this.state.list.filter(item => id !== item.id)
    });
  };

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
   * @param {*} n
   */
  handleTabs = n => {
    switch (n) {
      case 1:
        this.setState({
          displayAll: true,
          displayComp: false,
          displayIncomp: false,
          newList: this.state.list
        });
        break;
      case 2:
        this.setState({
          displayAll: false,
          displayComp: true,
          displayIncomp: false
        });
        break;
      case '3':
        this.setState({
          displayAll: false,
          displayComp: false,
          displayIncomp: true
        });
        break;
      default:
        this.setState({
          renderHome: true
        });
    }
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
  setCurrentView = view => {
    this.setState({
      activeTab: view
    });
  };

  /**
   *
   *
   * @returns {Array} Returns the array of list.
   */
  getTodoProps = () => {
    let todoList;

    switch (this.state.activeTab) {
      case TABS.HOME:
        todoList = this.state.list;
        break;
      case TABS.COMPLETED:
        todoList = this.state.list.filter(item => item.isDone);
        break;
      case TABS.REMAINING:
        todoList = this.state.list.filter(item => !item.isDone);
        break;

      default:
    }

    return todoList;
  };

  /**
   *
   *
   * @param {*} e
   */
  handleNewItemAddition = e => {
    e.preventDefault();
    const id = this.newItemId();

    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.pendingItem,
          isEditing: false,
          isDone: false,
          id
        }
      ],
      pendingItem: ''
    });
  };

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div className="wrapper">
        <div className="title">My Todo List</div>
        <Tabs setCurrentView={this.setCurrentView} activeTab={this.state.activeTab} />
        <InputForm
          handleNewItemAddition={this.handleNewItemAddition}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />

        <List
          list={this.getTodoProps()}
          removeItemAt={this.removeItemAt}
          toggleDone={this.toggleDone}
          toggleEditing={this.toggleEditing}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

export default App;

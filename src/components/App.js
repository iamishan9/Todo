import React, { Component } from 'react';

import List from './List';
import '../styles/App.css';
import InputForm from './InputForm';


class App extends Component {

  state = {
    list: [],
    pendingItem: "",
    displayAll: true,
    displayComp: false,
    displayIncomp:false,
    newList : []
  };

  lastItemId = 0;



  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  
  toggleEditing = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }

        return item;
      })
    });
  };


  toggleDone = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isDone: !item["isDone"]
           };
        }

        return item;
      })
    });
  };

  removeItemAt = id => {
    this.setState({ 
      list: this.state.list.filter(item => id !== item.id) 
    });
  };

  handleItemInput = e => this.setState({ 
    pendingItem: e.target.value 
  });


  handleTabs = n => {
    switch (n) {
      case 1:
        this.setState({
          displayAll: true,
          displayComp: false,
          displayIncomp: false,
          newList : this.state.list
        });
        break;
      case 2:
        this.setState({
          displayAll: false,
          displayComp: true,
          displayIncomp: false,
          newList : this.state.list.filter(item => item.isDone == true)
        });
        break;
      case '3':
        this.setState({
          displayAll: false,
          displayComp: false,
          displayIncomp: true,
          newList : this.state.list.filter(item => item.isDone == false)
        });
        break;
      default:
        this.setState({
          renderHome: true
        });
    }
  };


  editItemAt = (name, id) => {
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

  handleNewItem = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          isEditing: false,
          isDone: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="title">My Todo List</div>
        <div className="tabs">
          <button onClick={() =>  {this.setState({
            displayAll: true,
            displayComp: false,
            displayIncomp: false,
            newList : []
            });
            }
          }>
            All Tasks
        </button>
        <button onClick={() =>  {this.setState({
          displayAll: false,
          displayComp: true,
          displayIncomp: false,
          newList : this.state.list.filter(item => item.isDone == true)
        });
            }
          }>
            Completed
        </button>
        <button onClick={() =>  {this.setState({
          displayAll: false,
          displayComp: true,
          displayIncomp: false,
          newList : this.state.list.filter(item => item.isDone == false)
        });
            }
          }>
            Remaining
        </button>
        
        </div>
        <InputForm
          handleNewItem={this.handleNewItem}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />

        {this.state.displayAll && (
          <List
          list={this.state.list}
          removeItemAt={this.removeItemAt}
          toggleDone={this.toggleDone}
          toggleEditing={this.toggleEditing}
          editItemAt={this.editItemAt}
        />
        )}

          <List
          list={this.state.newList}
          removeItemAt={this.removeItemAt}
          toggleDone={this.toggleDone}
          toggleEditing={this.toggleEditing}
          editItemAt={this.editItemAt}
        />

      </div>
    );
  }
}

export default App;



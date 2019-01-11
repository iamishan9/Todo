import React, { Component } from "react";
import List from "./List";
import InputForm from "./InputForm";
import "../styles/App.css";

class App extends Component {

  state = {
    list: [],
    pendingItem: ""
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  
  toggleEditing = id => {
    // console.log("editing at ", id);
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
          <button onClick={()=>{ console.log('hello')}}>All Tasks</button>
          <button >Completed</button>
          <button >Remaining</button>
        </div>
        <InputForm
          handleNewItem={this.handleNewItem}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />


        <List
          list={this.state.list}
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




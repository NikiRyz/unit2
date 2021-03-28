import React, { Component } from "react";
import TodoItems from "./TodoItems";
import './TodoList.css'
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    const itemArray = this.state.items;
    const text = this._inputElement.value;
    if (text !== "") {
      itemArray.unshift({
        text: text,
        key: Date.now(),
      });
      this.setState({
        items: itemArray,
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(
      function(item){
        return(item.key!==key)
      }
    )
    this.setState({items:filteredItems})
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Введите задачу"
              ref={(a) => (this._inputElement = a)}
            />
            <button type="submit">Ok</button>
          </form>
        </div>
        <TodoItems delete={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}
export default ToDoList;

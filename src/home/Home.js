import React from "react";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: "",
      Items: [],
    };
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(index) {
    let { Items } = this.state;
    Items.splice(index, 1);
    this.setState({
      Items: Items,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Items: [...this.state.Items, this.state.todoList],
      todoList: "",
    });
  };

  handleClick = (e) => {
    this.setState({
      todoList: e.target.value,
    });
  };

  render() {
    let { Items } = this.state;
    return (
      <>
        <div className="banner">
          <h1>TodoList</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Ketik disini"
            value={this.state.todoList}
            onChange={this.handleClick}
          ></input>
          <button type="submit">Add</button>
        </form>

        <div className="card">
          <div className="list-items">
            <ul>
              {Items.map((item, index) => (
                <li className=" " key={index}>
                  {item}
                  <i
                    className="fas fa-trash"
                    onClick={this.removeTodo.bind(undefined, index)}
                    key={index}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </>
    );
  }
}
export default Home;

import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) =>
        this.setState(() => {
          return { mosters: user };
        })
      );
  }
  onChangeHandle = (e) => {
    const searchField = e.target.value;
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const filterArray = this.state.mosters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="monster-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandle={this.onChangeHandle}
          placeHolder="search monster"
          className="monster-input-box"
        />
        <CardList monsters={filterArray} />
      </div>
    );
  }
}

export default App;

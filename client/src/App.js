import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavBar from './components/navBar';
import Game from './components/Game/Game';
import SaveGame from './components/SavedGame/SavedGame';
// import About from './components/body';
import Home from './components/Home/Home';

import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//const SomeComponent = Route(props => <App {...props} />);

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      saved:[]
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/getgame')
      .then(response => {
        this.setState({
          games: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
      axios
      .get('http://localhost:5000/getsavedgames')
      .then(response => {
        this.setState({
          saved: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  componentDidUpdate() {
    axios
      .get('http://localhost:5000/getgame')
      .then(response => {
        this.setState({
          games: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
      axios
      .get('http://localhost:5000/getsavedgames')
      .then(response => {
        this.setState({
          saved: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  handleSubmit(gameData) {
    console.log(gameData);
    axios
      .post('http://localhost:5000/getsavedgames',gameData)
      .then(res => {
        alert("Game Saved")
      })
      .catch(error => {
        console.log("error")
      });
  }

  handleDelete(title) {
    console.log(title);
    axios.post('http://localhost:5000/getsavedgames/delete',title)
    .then(res => {
      alert("Game Deleted")
    })
    .catch(error => {
      window.location.reload();
    });
  }

  render() {
    return (
      <Router>
        <div id="Background">
          <AppNavBar />
          <Route
            exact
            path="/"
            render={() => (
              <Game item={this.state.games} onClick={this.handleSubmit} />
            )}
          />
          <Route
            path="/saved"
            render={() => (
              <SaveGame item={this.state.saved} onClick={this.handleDelete} />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Home item={this.state.saved} onClick={this.handleDelete} />
            )}
            />
        </div>
      </Router>
    );
  }
}

export default App;

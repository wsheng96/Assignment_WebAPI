import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavBar from './components/navBar';
import Game from './components/Game/Game';
import SaveGame from './components/SavedGame/SavedGame';
import GameNews from './components/GameNews/GameNews';
// import About from './components/body';
// import Home from './components/Home/Home';

//Auth Pages
import Landing from './components/Auth/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';

import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//const SomeComponent = Route(props => <App {...props} />);

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      saved: [],
      gamenews: [],
      gamenews2: [],
      savenews: []
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
    axios
      .get('http://localhost:5000/getgamenews')
      .then(response => {
        this.setState({
          gamenews: response.data.articles
        });
      })
      .catch(error => {
        alert(error);
      });
    axios
      .get('http://localhost:5000/getgamenews2')
      .then(response => {
        this.setState({
          gamenews2: response.data.articles
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
  }

  handleSave(newsData) {
    console.log(newsData);
    axios
      .post('/getsavednews/add', newsData)
      .then(res => {
        alert('News Saved');
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit(gameData) {
    console.log(gameData);
    axios
      .post('http://localhost:5000/getsavedgames/add', gameData)
      .then(res => {
        alert('Game Saved');
      })
      .catch(error => {
        console.log('error');
      });
  }

  handleDelete(title) {
    console.log(title);
    axios
      .post('http://localhost:5000/getsavedgames/delete', title)
      .then(res => {
        alert('Game Deleted');
      })
      .catch(error => {
        console.log('error');
      });
  }

  render() {
    return (
      <Router>
        <div id="Background">
          <AppNavBar />
          {/* Auth Parts */}
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route
            path="/home"
            render={() => (
              <Game item={this.state.games} onClick={this.handleSubmit} />
            )}
          />
          <Route path="/saved" component={SaveGame} />
          <Route
            path="/gameNews"
            render={() => (
              <GameNews
                item={this.state.gamenews}
                item2={this.state.gamenews2}
                onClick={this.handleSave}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;

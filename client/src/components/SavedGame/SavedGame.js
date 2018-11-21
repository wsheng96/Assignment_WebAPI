import React, { Component } from 'react';
import SaveGame from './SavedItems';
import SaveNews from './SavedNews';
import jwt_decode from 'jwt-decode'
import {
  Container, Row
} from 'reactstrap';

import axios from 'axios';

export default class SavedGame extends Component{
  constructor() {
    super();
    this.state = {
      savegame: [],
      savenews: [],
      first_name: '',
      last_name: '',
      email: ''
    };
  }
    
    componentDidMount () {
      this.getSaveGame();
      this.getSaveNews();
      const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    componentDidUpdate () {
      this.getSaveGame();
      this.getSaveNews();
    }

    getSaveGame = () => {
      axios
      .get('http://localhost:5000/getsavedgames')
      .then(response => {
        this.setState({
          savegame: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
    }

    getSaveNews = () => {
      axios
      .get('http://localhost:5000/getsavednews')
      .then(response => {
        this.setState({
          savenews: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
    }

    handleDelete(title) {
      axios
      .post('/getsavedgames/delete', title)
      .then(response => {
        alert("Item deleted")
      })
      .catch(error => {
        alert(error);
      });
    }

    handleRemove(title) {
      axios
      .post('/getsavednews/delete', title)
      .then(response => {
        alert("Item deleted")
      })
      .catch(error => {
        alert(error);
      });
    }


    render () {
      const res = this.state.savegame.map (item =>{
        return (
          <SaveGame item ={item} onClick={this.handleDelete}/>
        );
      })

      const res2 = this.state.savenews.map (item =>{
        return (
          <SaveNews item ={item} onClick={this.handleRemove}/>
        );
      })

      return (
            <div>
              <Container>
              <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </Container>
              <Container>
                <h1 id="Title">Saved Games</h1>
              </Container>
              <Container>
              <Row>{res}</Row>
              </Container>
              <Container>
                <h1 id="Title">Saved News</h1>
              </Container>
              <Container>
               <Row>{res2}</Row>
              </Container>
            </div>
           );
    }
    
  }
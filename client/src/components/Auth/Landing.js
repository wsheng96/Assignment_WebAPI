import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <Container>
   <div className="container">
        <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">WELCOME TO GAME LIST</h1>
              <h3 className="text-center">Latest games news and crack games new available here!!!</h3>
              <h3 className="text-center">Please register or login to view more contents</h3>
            </div>
        </div>
      </div>
      </Container>
    );
  }
}

export default Landing;

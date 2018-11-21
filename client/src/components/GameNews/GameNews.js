import React, { Component } from 'react';
import Game from './GameNewsItem';
import Game2 from './GameNewsItem2'
import {
  Container,Row
} from 'reactstrap';

const GameNews = props => {
  const gamenews = props.item;
  const gamenews2 = props.item2;
  let res, res2;

  if (gamenews.length > 0) {
    res = gamenews.map(res => <Game url={res} onClick={props.onClick} />);
  }

  if (gamenews2.length > 0) {
    res2 = gamenews2.map(res2 => <Game2 url={res2} onClick={props.onClick} />);
  }

  return (
    <div>
      <Container>
        <h1 id="Title">Latest Games News</h1>
      </Container>
      <Container>
      <Row>{res}{res2}</Row>
      </Container>
    </div>
  );
  
};

export default GameNews;
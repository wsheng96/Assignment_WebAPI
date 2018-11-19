import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

import logo from '../1.png';
import Rating from 'react-star-ratings';


const Game = props => {
  function handleSubmit() {
    props.onClick({
      title: props.url.title,
      link: props.url.link,
      image: props.url.image,
      releaseDate: props.url.releaseDate,
      OriginalPrice: props.url.OriginalPrice,
      ratings: props.url.ratings
    });
  }


  return (
    
    <Col xs="6">
    <Card id="size">
    <CardImg top width="100%" src={props.url.image} alt={props.url.title} />
  <CardBody id="CardBody">
    <CardTitle id="gametitle">{props.url.title}</CardTitle>
    {/* <CardSubtitle id="Link">{props.url.link}</CardSubtitle> */}
    <CardText id="ReleaseDate"> Release Date: {props.url.releaseDate}</CardText>
    <CardText id="OriginalPrice">Original Price: ${props.url.OriginalPrice}</CardText>
    <Rating id="Rating" rating = {props.url.ratings/20} numberOfStars = {5} starRatedColor = "gold"/>
  </CardBody>
  <CardFooter id="cardfooter">
    <Button id="save_btn"onClick={handleSubmit}>Save</Button>
    <Button id="read-btn" href={props.url.link} target="_blank">Read More</Button>
  </CardFooter>
  </Card>
  <br/>
  </Col>
  );
};

export default Game;
import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

import logo from '../1.png';


const GameItems = props => {
  function handleSubmit() {
    props.onClick({
      title: props.url.title,
      descrption: props.url.description,
      urlToImage: props.url.urlToImage,
      publishedAt: props.url.publishedAt,
      url: props.url.url
    });
  }


  return (
    
    <Col xs="6">
    <Card id="size">
    <CardImg top width="100%" src={props.url.urlToImage} alt={props.url.title} />
  <CardBody id="CardBody">
    <CardTitle id="gametitle">{props.url.title}</CardTitle>
    {/* <CardSubtitle id="Link">{props.url.link}</CardSubtitle> */}
    <CardText id="ReleaseDate"> Release Date: {props.url.publishedAt}</CardText>
    <CardText id="OriginalPrice">Description: {props.url.description}</CardText>
  </CardBody>
  <CardFooter id="cardfooter">
    <Button id="save_btn"onClick={handleSubmit}>Save</Button>
    <Button id="read-btn" href={props.url.url} target="_blank">Read More</Button>
  </CardFooter>
  </Card>
  <br/>
  </Col>
  );
};

export default GameItems;
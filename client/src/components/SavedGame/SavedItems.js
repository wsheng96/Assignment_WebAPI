import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

import Rating from 'react-star-ratings';

const SavedItems= props => {
  function handleDelete() {
    props.onClick({
      title:props.item.title
    });
  }

  return (
    
        <Col xs="6">
    <Card id="size">
    <CardImg top width="100%" src={props.item.image} alt={props.item.title} />
  <CardBody id="CardBody">
    <CardTitle id="gametitle">{props.item.title}</CardTitle>
    {/* <CardSubtitle id="Link">{props.url.link}</CardSubtitle> */}
    <CardText id="ReleaseDate"> Release Date: {props.item.releaseDate}</CardText>
    <CardText id="OriginalPrice"> Original Price: ${props.item.originalPrice}</CardText>
    <Rating id="Rating" rating = {props.item.ratings/20} numberOfStars = {5} starRatedColor = "gold"/>
  </CardBody>
  <CardFooter id="cardfooter">
    <Button id="save_btn"onClick={handleDelete}>Delete</Button>
    <Button id="read-btn" href={props.item.link} target="_blank">More Details</Button>
  </CardFooter>
  </Card>
  <br/>>
  </Col>
  
  );
};

export default SavedItems;
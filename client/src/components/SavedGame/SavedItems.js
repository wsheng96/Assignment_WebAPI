import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const SavedItems= props => {
  function handleDelete() {
    props.onClick({
      title:props.url.title
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
    <CardText id="OriginalPrice"> Original Price: ${props.url.originalPrice}</CardText>
    <CardText id="Rating">{props.url.ratings}</CardText>
  </CardBody>
  <CardFooter id="cardfooter">
    <Button id="save_btn"onClick={handleDelete}>Remove</Button>
    <Button id="read-btn" href={props.url.link} target="_blank">More Details</Button>
  </CardFooter>
  </Card>
  <br/>>
  </Col>
  
  );
};

export default SavedItems;
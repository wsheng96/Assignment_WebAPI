import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';


const SavedNews= props => {
  function handleDelete() {
    props.onClick({
      title:props.item.title
    });
   } 

  return (
    
      <Col xs="6">
      <Card id="size">
      <CardImg top width="100%" src={props.item.urlToImage} alt={props.item.title} />
    <CardBody id="CardBody">
      <CardTitle id="gametitle">{props.item.title}</CardTitle>
      {/* <CardSubtitle id="Link">{props.url.link}</CardSubtitle> */}
      <CardText id="ReleaseDate"> Release Date: {props.item.publishedAt}</CardText>
      <CardText id="OriginalPrice">Description: {props.item.description}</CardText>
    </CardBody>
    <CardFooter id="cardfooter">
      <Button id="save_btn" onClick={handleDelete}>Delete</Button>
      <Button id="read-btn" href={props.item.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card>
    <br/>
    </Col>
  );
};

export default SavedNews;
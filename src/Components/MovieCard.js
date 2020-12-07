import React from "react";
import { Card } from "react-bootstrap";
import './MovieListe.css';
import StarRatingComponent from 'react-star-rating-component';
//import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({ title, description, posterUrl, rate }) {
  return (
    <div className="corp ">
      <Card style={{ width: "360px", height:"600px" ,backgroundColor:"white",margin:"20px"}}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "350px", height:"350px" }} />
        <Card.Body >
          <Card.Title style={{ color:"red" ,fontSize:"25px" }}>{title}</Card.Title>
          <Card.Text style={{ color:"black" ,fontSize:"18px" }}>{description}</Card.Text>
          <StarRatingComponent value={rate}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;

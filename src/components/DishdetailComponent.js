import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, 
    CardBody, CardTitle } from 'reactstrap';

export default class DishdetailComponent  extends Component {

    renderComments(comments){
        const information = comments.map((info) => {
            return(
                <ListGroup>
                    <ListGroupItem>{'--'}{info.comment}</ListGroupItem>
                    <ListGroupItem>{info.author}{' , '}{info.author}</ListGroupItem>
                </ListGroup>
            );
           });
        return(
            <div>{information}</div>
        );
    }

    rendersimple(comments){
        const information = comments.map((info) => {
            return(
                <div>
                    <p>{info.comment}</p>
                    <p>{'--'}{info.author}{' , '}{info.date}</p>
                </div>
            );
           });
        if(comments)
        return(
            <div>{information}</div>
        );
        else
            return(
                <div>   </div>
            );
    }

    renderDish(dish) {
        return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>   
        );
    }


    render() {

        if (this.props.dish != null)
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                   {this.renderDish(this.props.dish)}
                </div>

                <div  className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
        else
        return(
            <div>   </div>
        )
    }
}


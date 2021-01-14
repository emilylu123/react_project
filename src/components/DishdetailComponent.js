import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div/>
            );
    }
    renderComments(dish){
        if (dish != null)
            return (
                <div className="row">
                    <div>
                        <h4>Comments</h4>
                        {dish.comments.map((comment,i) => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>{`-- ${comment.author} , ${comment.date}`}</p>
                                </div>
                            )
                        })};
                    </div>
                </div>
            );
        else return(<div></div>);
    }

    render() {
        const dish = this.props.selctedDish
        if (dish != null)
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        else
            return(
                <div/>
            );

    }
}

export default DishDetail;
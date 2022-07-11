import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments(props) {
   
    const standardDateFormat = { year: 'numeric', month: 'short', day: '2-digit'};

    if (props.comments) {
        const dishComments = props.comments.map((comment) => {
            return (
                <li key={comment.id}>  
                 <p>{comment.comment}</p>        
                            <p>-- {comment.author},
                            {new Intl.DateTimeFormat('en-US',
                             standardDateFormat).format( new Date(Date.parse(comment.date)))} </p>        
                    </li>     
               );
            });

            return (
                <div  className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {dishComments}
                </ul>                                     
            </div>
            );
        } else {
            return <div></div>; 
        }
}

function RenderDish({dish}) {
    if (dish) {
        return (
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>  
            </div>
        );
    } else{
        return <div></div>;
    }
}

const  DishDetail = (props) => {

    return(
        <div className="container">
            <div className = "row">
                <RenderDish dish ={props.dish} />
                <RenderComments comments = {props.dish? props.dish.comments: null} />
            </div>
        </div>
    );
}
    
export default DishDetail;
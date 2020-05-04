import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

	renderComments(comments){

		if(comments == null){
			return(
				<div></div>
				);
		}else{
			const dishComments = comments.map((comment) => {
				return (
						<div key={comment.id}>
							<CardText className="pb-2">
								{comment.comment}
								<br/>
								--{comment.author},&nbsp; 
								{new Intl.DateTimeFormat('en-US', {
									year: 'numeric',
									month: 'short',
									day: '2-digit'
								}).format(new Date(comment.date))}
							</CardText>
						</div>
					);
			});

			return(
				<div>
					<Card>
						<CardBody>
							<h4>Comments</h4>
							{dishComments}
						</CardBody>
					</Card>
				</div>
				);
		}
	}

	render(){

		if(this.props.dish != null){

			return(
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 m-1">
							<Card>
								<CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
								<CardBody>
									<CardTitle>{this.props.dish.name}</CardTitle>
									<CardText>{this.props.dish.description}</CardText>
								</CardBody>
							</Card>
						</div>
						<div className="col-12 col-md-5 m-1">
							
							{this.renderComments(this.props.dish.comments)}
									
						</div>
					</div>
				</div>
			);
		}else{
			return(
				<div></div>
				);
		}
		
	}
}

export default DishDetail;
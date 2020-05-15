import React, { Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody,
		Form, FormGroup, Input, Label, Col, Row} from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{

	constructor(props){
		super(props);
 
		this.state = {
			isModalOpen: false
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values){
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

	render(){
		return(
			<>
				<Button outline onClick={this.toggleModal}>
	  				<span className="fa fa-pencil fa-fw" />Submit Comment
	  			</Button>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
		        	<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
		        	<ModalBody>
		        		<div className="col-12 col-md-12">
			        		<LocalForm onSubmit={(values) => this.handleSubmit(values)}>

			        		 	<Row className="form-group">
	                                <Label htmlFor="rating" md={12}>Rating</Label>
	                                <Col md={12}>
                                    <Control.select 
                                    		model=".rating" 
                                            name="rating"
                                            className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
	                            </Row>

	                            <Row className="form-group">
	                                <Label htmlFor="name" md={12}>Your Name</Label>
	                                <Col md={12}>
	                                    <Control.text model=".name" id="name" name="name"
	                                        placeholder="Your Name"
	                                        className="form-control"
	                                        validators={{
	                                            required,
	                                            minLength: minLength(3),
	                                            maxLength: maxLength(15)
	                                            }} />
	                                    <Errors 
	                                        className="text-danger"
	                                        model=".name"
	                                        show="touched"
	                                        messages={{
	                                            required: 'Required',
	                                            minLength: 'Must be greater than 2 characters',
	                                            maxLength: 'Must be 15 characters or less'
	                                            }}
	                                    />            
                                	</Col>
	                            </Row>

	                            <Row className="form-group">
	                                <Label htmlFor="name" md={12}>Comment</Label>
	                                <Col md={12}>
	                                   
	                                   <Control.textarea 
                                        model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"/>
                                	</Col>
	                            </Row>
	                            <Row className="form-group">
	                                <Col md={12}>
	                                    <Button type="submit" color="primary">
	                                        Submit
	                                    </Button>
	                                </Col>
	                            </Row>
			        		</LocalForm>
		        		</div>
		        	</ModalBody>
		        </Modal>
	        </>
			);
	}

}


export default CommentForm;		
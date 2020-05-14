import React, { Component } from 'react';
import firebase from '../utils/firebase-config';
import {Container, Jumbotron, Button, Form} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: '',
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    firebase.database().ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: ''
    });
    this.props.history.push('/posts');
  }

  render() {
    return (
      <Container className = "p-3">
        <Jumbotron>
          <h2>Add a new Post</h2>
          <Form>
            <Form.Group>
              <Form.Control 
                size = "lg" 
                type = "text"
                placeholder = " Write the title of your post"
                onChange = { this.handleChange }
                value = { this.state.title }
              />
            </Form.Group>
            <Button 
              variant = "primary"
              type = "submit"
              onClick={ this.handleSubmit }
            >
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default AddPost;

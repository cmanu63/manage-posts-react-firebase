import React from 'react';
import {Container, Jumbotron, Card} from 'react-bootstrap';

export default function Home() {
    return (
      <Container className = "p-3">
        <Jumbotron>
          <Card className = "ml-3">
            <Card.Title className = "ml-3 mt-3">Home</Card.Title>
            <Card.Body>
              <Card.Text>This application uses a realtime Firebase database to manage a collection of posts.</Card.Text>
              <Card.Text>In Posts page you can see the list of posts and you can upvote or downvote any post.</Card.Text>
              <Card.Text>In Add Post page you can add a new post to the posts list.</Card.Text>
              <Card.Text>Components are stylized with react-bootstrap.</Card.Text>
            </Card.Body>
          </Card>
        </Jumbotron>
      </Container>
    );
  }

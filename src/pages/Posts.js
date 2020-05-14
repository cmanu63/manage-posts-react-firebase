import React, {Component} from 'react';
import firebase from '../utils/firebase-config';
import {Container, Card, Jumbotron, Button} from 'react-bootstrap';

class Posts extends Component {

    constructor() {
        super();

        this.state = {
            posts: [],
            loading: true,
        }
    }

    componentDidMount() {
        let postsRef = firebase.database().ref('posts');
        let _this = this;
        postsRef.on('value', function(snaphot) {
            _this.setState({
                posts: snaphot.val(),
                loading: false
            })
        });
    }

    handleUpvote = (post, key) => {
        firebase.database().ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote + 1,
            downvote: post.downvote
        });
    }

    handleDownvote = (post, key) => {
        firebase.database().ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote,
            downvote: post.downvote + 1
        });
    }

    render() {
        let posts = this.state.posts;
        let _this = this;

        if(!posts) {
            return <div>Nope</div>;
        }

        if(this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return (
            <Container className = "p-3">
                <Jumbotron>
                    <h2>Posts List</h2>
                    { Object.keys(posts).map( function(key) {
                        return (
                            <Card key = {key} className = "ml-3 mb-3">
                                <Card.Title className = "ml-3 mt-3 mb-n2"> Title: { posts[key].title } </Card.Title>
                                <Card.Body>
                                    <Card.Text> 
                                        Upvotes: { posts[key].upvote }  &nbsp; &nbsp; &nbsp;   
                                        Downvotes: { posts[key].downvote }
                                    </Card.Text>
                                    <Button
                                        variant = "primary" size = "sm"
                                        onClick = { _this.handleUpvote.bind(this, posts[key], key) }
                                    >
                                        Upvote
                                    </Button>
                                    &nbsp; &nbsp; &nbsp;
                                    <Button
                                        variant = "primary" size = "sm"
                                        onClick = { _this.handleDownvote.bind(this, posts[key], key) }
                                    >
                                        Downvote
                                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Jumbotron>
            </Container>
        )
    }
  }

  export default Posts;
  
  
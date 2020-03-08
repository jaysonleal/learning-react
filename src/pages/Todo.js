import React, { Component } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

class Todo extends Component{


    componentDidMount() {
        console.log(this.props.location.state);
    }

    render() {
        const { location } = this.props;
        const post  = location.state;
        // return 
        return (
            <div className="container mt-5">
                <h1>Card Details</h1>
                <Card post={post}/>
                <Link to="/home" className="btn btn-primary mt-3">Back to home</Link>
            </div>
        )
    }

}

export default Todo;
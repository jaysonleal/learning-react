import React, { Component } from 'react';
import LogComponent from '../concerns/LogComponent';


class Profile extends Component{

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eveniet sapiente porro repellat quibusdam odit totam aut vero illo molestiae. Vero possimus consequuntur reiciendis consectetur, vel incidunt nisi corporis voluptatem!</p>
            </div>
        )
    }

}

export default LogComponent(Profile);
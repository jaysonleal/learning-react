import React, { Component }from 'react';
 
const LogComponent = WrapComponent => {
    return class extends Component {
        componentDidMount() {
            console.log("log user data");
        }
    

    render() {   
            return <WrapComponent { ...this.props }/>  
    }
    
    }
}

export default LogComponent;
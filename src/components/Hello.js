// eslint-disable-next-line no-unused-vars
import React from 'react';

// shortcut
// const Hello = props => (
//         <div>
//             <h1>Hello React Component</h1>
//         </div>
// );

// normal return {} then add return
const Hello = props => {
    console.log(props);
    return (
        <div>
        <h1>Hello React Component {props.name}</h1>
        </div>
    )
};

Hello.defaultProps = {
    name: "Kwan"
}

export default Hello;
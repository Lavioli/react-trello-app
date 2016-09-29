var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var Board = function(props) {
    return (
        <div className="list">
            <div className="title">{props.title}</div>
            <div className="lists">{props.lists}</div>
        </div>
    );  
};

// var Board = function() {
//     return (
//         <div>
//             <List />
//             <List />
//             <List />
//         </div>
//     );
// };

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
var React = require('react');
var Card = require('./card');

module.exports = function(props) {
    return (
        <div className="cards">
            <div className="title">{props.title}</div>
            <div className="cards">{props.cards}</div>
        </div>
    );
};

// module.exports = function() {
//     return (
//         <div>
//             <Card />
//             <Card />
//             <Card />
//         </div>
//     );
// };
1. npm init
2. echo "node_modules/" >> .gitignore
3. npm install react react-dom --save
4. npm install webpack http-server -g
5. npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev
6. touch index.html in build folder
7. touch webpack.config.js 
    var path = require('path');
    
    var webpack = require('webpack');
    
    var packageData = require('./package.json');
    
    var filename = [packageData.name, packageData.version, 'js'];
    
    module.exports = {
        entry: path.resolve(__dirname, packageData.main),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: filename.join('.'),
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    };


8. touch index.js 
    var React = require('react');
    var ReactDOM = require('react-dom');
    
    var Person = function() {
        var name = 'Derek Zoolander';
        var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
        var job = 'Male model';
        return (
            <div className="person">
                <div className="person-name">{name}</div>
                <img className="person-img" src={imageUrl} />
                <div className="person-job">
                    {job}
                </div>
            </div>
        );
    };
    
    document.addEventListener('DOMContentLoaded', function() {
        ReactDOM.render(<Person />, document.getElementById('app'));
    });

9. touch index.html
    <style>
        .person {
            width: 200px;
            text-align: center;
            border: 1px solid black;
            padding: 10px;
            margin: 10px;
            display: inline-block;
        }
    
        .person-name {
            font-weight: bold;
        }
    
        .person-img {
            display: block;
            max-width: 128px;
            max-height: 128px;
            margin: 10px auto;
        }
    
        .highlight {
            background-color: yellow;
        }
    </style>
    
    <div id="app"></div>
 

10. inside index.html link in source file:
	<script type="text/javascript" src="build/react-trello.1.0.0.js"></script>

11. inside the react-test directory type and enter:
	webpack -wc or webpack --watch

	type 'http-server' and hit enter
	should see image in browser


12. cd build
13. http-server



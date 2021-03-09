**Deployment**
    `"start": "webpack serve --hot --open"` instead of `"start": "webpack-dev-server --hot --open"`

**SCSS**
    Need to install:
        > npm install scss
        > npm install sass-loader
    
    Docs: https://webpack.js.org/loaders/sass-loader/

        
**Image**
    > npm install file-loader

**Import**
    > `import thumb from './background-image.png'` rather than `src={require('./background-image.png')}`

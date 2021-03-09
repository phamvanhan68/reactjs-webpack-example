import React from 'react';
import 'App.scss'
import Nav from './Navigation'
import thumb from './background-image.png'

const App = () => (
    <div className="color">
        <Nav/>
        <h1>First attempt!!!</h1>
        <img src={(thumb)} alt=""/>
    </div>
)

export default App;


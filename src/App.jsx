
import 'App.scss'
import Nav from './Navigation'
import thumb from './images/background-image2.png'
import thumb2 from './images/butterfly1.png'

const App = () => (
    <div className="color">
        <Nav/>
        <h1>First attempt!</h1>
        <img src={(thumb)} alt=""/>
        <img src={(thumb2)} alt=""/>
    </div>
)

export default App;


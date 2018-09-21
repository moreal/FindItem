import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom';


class Main extends Component {
    render(){
        return (
            <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>

            </div>
            </BrowserRouter>
    
            )
    }
}
class Home extends Component {
    render() {
        return (
            <div >
                <a href="/about">어바웃</a>
                <p>헤헤헤ㅔㅎ</p>
            </div>
        )
    }
}
class About extends Component {
    render() {
        return (
            <div>
            <a href="/">메인</a>
            <p>이이이이</p>
            </div>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();


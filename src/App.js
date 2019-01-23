import React, {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Header from "./Components/Header";
import User from "./Components/User";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header text='resume'/>
                <div className="row ">
                    <User />
                    <User />
                </div>
            </div>
        );
    }
}

export default App;

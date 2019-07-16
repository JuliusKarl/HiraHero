import React, { Component } from 'react';
import hiragana from "./Resources/Hiragana";

class App extends Component {
    constructor() {
        super();
        this.state = {
            hira: "",
            eng: "",
            ans: false
        };
        this.getRandom = this.getRandom.bind(this);
        this.showAns = this.showAns.bind(this);
    }
    componentDidMount() {
        this.getRandom();
        console.log(this.state.chars)
    }
    getRandom() {
        this.setState({
            hira: hiragana[Math.round(Math.random()  * (hiragana.length - 1))].char[0],
            eng: hiragana[Math.round(Math.random()  * (hiragana.length - 1))].char[1],
            ans: false
        });
    }
    showAns() {
        this.setState({
            ans: true
        })
    }
    render() {
        return (
        <div className="baseWindow">
            <div className="activeWindow">
                <div className="textWindow">
                    <h1>{this.state.hira}</h1>
                    {this.state.ans && <p>{this.state.eng}</p>}
                </div>
                <button onClick={this.getRandom}><p>Next</p></button>
                <button onClick={this.showAns}><p>Answer</p></button><br/>
            </div>
        </div>
        );
    }
}
export default App;

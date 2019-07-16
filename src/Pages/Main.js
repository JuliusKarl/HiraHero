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
        let index = Math.round(Math.random()  * (hiragana.length - 1));
        this.setState({
            hira: hiragana[index].char[0],
            eng: hiragana[index].char[1],
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
                    {(this.state.ans ? <p>{this.state.eng}</p> : <button id="answerButton" onClick={this.showAns}><p>Answer</p></button>)}
                </div><br/>
                <button onClick={this.getRandom}><p>Next</p></button>
            </div>
        </div>
        );
    }
}
export default App;

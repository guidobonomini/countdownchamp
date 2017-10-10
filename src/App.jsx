import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadLine: 'December 25, 2017',
            newDeadLine: ''
        };
    }

    changeDeadline(){
        this.setState({deadLine: this.state.newDeadLine});
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadLine}</div>
                <Clock
                    deadLine={this.state.deadLine}
                />
                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;
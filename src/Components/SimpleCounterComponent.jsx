import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            toggleStatus:false,
        }
    }
    handleInc = () => {
        if(!this.state.toggleStatus){
            this.setState({...this.state, count:this.state.count});
        }else{
            this.setState({...this.state,count:this.state.count+1})
        }
    }
    handleToggle = () => {
        this.setState({...this.state,toggleStatus:!this.state.toggleStatus})
    }
    
  render() {
    console.log('This is Simple Component',this.state.toggleStatus);
    return (
      <div>
        <div>
        <h2>Simple Counter Component</h2>
        <h3>{this.state.count}</h3>
        </div>
        <div>
            <button onClick={this.handleToggle}>Set Toggle</button>
            <button onClick={this.handleInc}>Counter</button>
        </div>
      </div>
    );
  }
}

export default SimpleCounterComponent;

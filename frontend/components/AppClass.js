import React from 'react'

export default class AppClass extends React.Component {
  constructor(){
    super();
    this.state = {
      x: 2,
      y: 2,
      step: 0,
      message: "",
      email:""
    }

  }
  handleLeft(){
    const {x,step,message} = this.state
    if(x === 1){
      this.setState(message,"You cant' go left")
    }
    else{
      this.setState(x,x-1)
      this.setState(step,step+1)
      this.setState(message,"")
    }
    
  }
  handleRight(){
    const {x,step,message} = this.state
   if(x === 3){
      this.setState(message,"You can't go right")
    } else{
      this.setState(x,x+1)
      this.setState(step,step+1)
      this.setState(message,"")
    }
  }
  handleUp(){
    const {y,step,message} = this.state
    if(y === 1){
      this.setState(message,"You can't go up")
    } else{
      this.setState(y,y - 1)
      this.setState(step,step+1)
      this.setState(message,"")
    }
  }
  handleDown(){
    const {x,y,step,message} = this.state
    if(y === 3){
      this.setState(message,"You can't go down")
    }else{
      this.setState(y,y + 1)
      this.setState(step,step+1)
      this.setState(message,"")
    }
  }
  handleReset(){
    const {x,y,message} = this.state
    this.setState(x,2)
    this.setState(y,2)
    this.setState(0)
    this.setState(message,"")
  }
  slot = (a,b) => {
    return a === this.state.x && b === this.state.y ? 'B' : '';
  }
  handleChange = (e) => {
    this.setEmail(this.state.email,e.target.value)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.email.split('@')[0]
    this.setMessage(this.state.message,`${username} wins #${Math.floor(Math.random()*30)}`)
    this.setEmail(this.state.email,"")
  }


  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">{`Coordinates (${this.state.x},${this.state.y})`}</h3>
        <h3 id="steps">{`You moved ${this.state.step} times`}</h3>
        </div>
        <div id="grid">
        <div className="square">{this.slot(1,1)}</div>
        <div className="square">{this.slot(2,1)}</div>
        <div className="square">{this.slot(3,1)}</div>
        <div className="square">{this.slot(1,2)}</div>
        <div className="square">{this.slot(2,2)}</div>
        <div className="square">{this.slot(3,2)}</div>
        <div className="square">{this.slot(1,3)}</div>
        <div className="square">{this.slot(2,3)}</div>
        <div className="square">{this.slot(3,3)}</div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
        <button id="left" onClick={this.handleLeft}>LEFT</button>
        <button id="up" onClick={this.handleUp}>UP</button>
        <button id="right" onClick={this.handleRight}>RIGHT</button>
        <button id="down" onClick = {this.handleDown}>DOWN</button>
        <button id="reset" onClick= {this.handleReset}>reset</button>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input id="email" type="email" placeholder="type email" value={this.state.email} onChange={this.handleChange}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
};

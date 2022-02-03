import React,{useState} from 'react'

export default function AppFunctional(props) {
  const [x,setX] = useState(2)
  const [y,setY] = useState(2)
  const [message,setMessage] = useState()
  const [step,setStep] = useState(0)
  const [email,setEmail] = useState()

  const handleLeft = () => {
    if(x === 1){
      setMessage("You cant' go left")
    }
    else{
      setX(x-1)
      setStep(step+1)
      setMessage("")
    }
    
  }
  const handleRight = () => {
   if(x === 3){
      setMessage("You can't go right")
    } else{
      setX(x+1)
      setStep(step+1)
      setMessage("")
    }
  }
  const handleUp = () => {
    if(y === 1){
      setMessage("You can't go up")
    } else{
      setY(y - 1)
      setStep(step+1)
      setMessage("")
    }
  }
  const handleDown = () => {
    if(y === 3){
      setMessage("You can't go down")
    }else{
      setY(y + 1)
      setStep(step+1)
      setMessage("")
    }
  }
  const handleReset = () => {
    setX(2)
    setY(2)
    setStep(0)
    setMessage("")
  }
  const slot = (a,b) => {
    return a === x && b === y ? 'B' : '';
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = email.split('@')[0]
    setMessage(`${username} wins #${Math.floor(Math.random()*30)}`)
    setEmail("")
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${x},${y})`}</h3>
        <h3 id="steps">{`You moved ${step} times`}</h3>
      </div>
      <div id="grid">
        <div className="square">{slot(1,1)}</div>
        <div className="square">{slot(2,1)}</div>
        <div className="square">{slot(3,1)}</div>
        <div className="square">{slot(1,2)}</div>
        <div className="square">{slot(2,2)}</div>
        <div className="square">{slot(3,2)}</div>
        <div className="square">{slot(1,3)}</div>
        <div className="square">{slot(2,3)}</div>
        <div className="square">{slot(3,3)}</div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={handleLeft}>LEFT</button>
        <button id="up" onClick={handleUp}>UP</button>
        <button id="right" onClick={handleRight}>RIGHT</button>
        <button id="down" onClick = {handleDown}>DOWN</button>
        <button id="reset" onClick= {handleReset}>reset</button>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="email" type="email" placeholder="type email" value={email} onChange={handleChange}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}

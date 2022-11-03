import React, {useState} from "react"
import excuses from "excuses"
import Ball from "./Ball"

const App = () => {
  const randomExcuse = () => excuses.developers.getRandom();
  const handleBallClick = () => setExcuse(randomExcuse());

  const [excuse, setExcuse] = useState(randomExcuse());
  return (
		<div className="App">
      <Ball excuse={excuse} handleClick={handleBallClick}/>
    </div>
  )
}

export default App  
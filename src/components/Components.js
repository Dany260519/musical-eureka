import React, {useState} from 'react'
import Numbers from './Numbers'

function Components() {
  const [clicked, setClicked] = useState(false);

  const startGame = () => {
    setClicked(true);
  }

  return (
    <div>     
      {clicked ? (
        <Numbers />
      ) : (
      <button className='buttons' id='start' onClick={startGame}>START</button>
      )}
    </div>
  )
}

export default Components
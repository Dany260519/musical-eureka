import React, { useState } from 'react'

function Numbers() {
  
    const numbers = []

    for(let i = 0; i <= 10; i++){
        numbers.push(i);
    }

    const [response, setResponse] = useState('')

    const [num, setNum] = useState(null)

    const NumRandom = () => {
      const random = Math.floor(Math.random()*numbers.length);

      const Num = numbers[random];

      if (Num == num) {
        setResponse('HAS ACERTADO!')
      } else {
        setResponse('TAL VEZ A LA PROXIMA!')
      }
    }

    const offApp = () =>{
      window.close()
    }

    return (
    <div id='scroll'>
      <h1 className='answer' id='header'>Estoy pensando un numero del 0 al 10...Podras acertar?</h1>
      
      <input type='number' value={num} onChange={e => setNum(e.target.value)} className='putTheNumber' max={10} min={0}/>
      
      <button onClick={NumRandom} className='buttons'>TEST</button>
      
      <h1 className='answer'>{response}</h1>
      
      <button className='buttons' onClick={offApp}>Close</button>
    </div>
  )
}

export default Numbers

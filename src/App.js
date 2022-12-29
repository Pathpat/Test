import { useState } from 'react';
import Calendar from 'react-calendar'

function App(){
  const [value,onCharge]=useState(new Date());
  return(
    <div>
      <Calendar onCharge={onCharge} value={value} /> 
       
    </div>
  )
}

export default App;

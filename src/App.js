import './App.css';
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Student from './components/Student.jsx'
import Employee from './components/Employee.js'

import { useState } from 'react';
import './index.css';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('Developer');  

  return (    
    <div className="App">
      {showEmployees ?
        <div>
          <Card/>
          <Card/>
          <Card/>

         <Button/> 

         <Student name="Annah Chala" age={23} isStudent={true} />
         <Student name="James Kimani" age={42} isStudent={false} />
         <Student name="Salome Muhula" age={22} isStudent={true} />
         <Student name="Yakub Hussein" age={43} isStudent={false} />
          {/* <input 
            type="text"
            onChange={
              function(e){
                // console.log(e.target.value);
                // setRole(e.target.value);
              }
            }
          />
          
          <Employee name='Anna' role='Manager'/>
          <Employee name='Peter' role={role}/>  */}
        </div>     
      :
        <p>No Employee information</p>
      }
    </div>
  );
}

export default App;

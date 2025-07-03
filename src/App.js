import './App.css';
import Employee from './components/Employee.js'
import { useState } from 'react';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('Developer');  

  return (    
    <div className="App">
      {showEmployees ?
        <div>
          <input 
            type="text"
            onChange={
              function(e){
                console.log(e.target.value);
                setRole(e.target.value);
              }
            }
          />
          
          <Employee name='Anna' role='Manager'/>
          <Employee name='Peter' role={role}/>
        </div>     
      :
        <p>No Employee information</p>
      }
    </div>
  );
}

export default App;

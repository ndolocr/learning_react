import './App.css';
import Employee from './components/Employee.js'
import Card from './components/Card.jsx'
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
          {/* <input 
            type="text"
            onChange={
              function(e){
                console.log(e.target.value);
                setRole(e.target.value);
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

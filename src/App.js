import './App.css';
import Employee from './components/Employee.js'

function App() {
  const showEmployees = true;

  return (    
    <div className="App">
      {showEmployees ?
        <div>
          <Employee name='Anna' role='Manager'/>
          <Employee name='Peter'/>
        </div>     
      :
        <p>No Employee information</p>
      }
    </div>
  );
}

export default App;

import './App.css';
import Employee from './components/Employee.js'

function App() {
  const showEmployees = true;

  return (    
    <div className="App">
      {showEmployees ?
        <div>
          <Employee></Employee>
          <Employee></Employee>
        </div>     
      :
        <p>No Employee information</p>
      }
    </div>
  );
}

export default App;

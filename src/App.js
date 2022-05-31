import './App.css';
import ReadOnlyRow from './ReadOnlyRow';
import data from "./mock-data.json";
import { useState } from 'react';

function App() {
  const [contacts] = useState(data);
  return (
    
    <div className="app-container">
    <form >
      <table>
        <thead>
          <tr>
          
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => (
              <ReadOnlyRow
              contact={contact}
             
            />
            ))}
        </tbody>
      </table>
    </form>

  
  </div>
  );
}

export default App;

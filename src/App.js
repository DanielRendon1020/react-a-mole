import { useState } from 'react';
import './App.css';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)

  return (
    <div className="App">
        <MoleContainer/>
    </div>
  );
}

export default App;

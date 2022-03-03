import useToggle from 'arya-usetoggle';
import './App.css';

function App() {
  const [isOn, setIsOn]=useToggle();
  return (
    <div className="App">
      <button onClick={()=>setIsOn(isOn=>!isOn)}>Active{`${isOn}`}</button>
    </div>
  );
}

export default App;

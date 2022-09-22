import { useState } from 'react';
import './App.css';
const districtStyle = {
  backgroundColor: 'yellowgreen',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'
}
function App() {
  return (
    <div className="App">
      <District name="Chittagong" special="Mejban"/>
      <District name="Dhaka" special="Capital"/>
      <District name="Kulna" special="Ku ku "/>
    </div>
  );
}
function District({name, special}){
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power * 2);
  const downPower = ()=> setPower(power / 2);
  return (
    <div style={districtStyle}>
      <h3>Name: {name}</h3>
      <p>Specialty: {special}</p>
      <h4>Power: {power}</h4>
      <button style={{marginRight: '20px'}} onClick={boostPower}>Boost Power</button>
      <button onClick={downPower}>Down Power</button>
    </div>
  )
}
export default App;

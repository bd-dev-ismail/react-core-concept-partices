import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Chittagong" special="Mejban"/>
      <District name="Dhaka" special="Capital"/>
      <District name="Kulna" special="Ku ku ku"/>
    </div>
  );
}
function District(props){
  console.log(props);
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Specialty: {props.special}</p>
    </div>
  )
}
export default App;



import './App.css';
import Blog from './blog/Blog';
import Mobile from './blog/Mobile';
import Todos from './Todos/Todos';
function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todos/>
      <Blog></Blog>
    </div>
  );
}

export default App;

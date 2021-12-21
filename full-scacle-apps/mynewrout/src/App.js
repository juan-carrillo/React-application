import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>My New Rout</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/">App</Link>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default App;

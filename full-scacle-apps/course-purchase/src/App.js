import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

function App() {
  var courses = [
    { name:'Complete iOS dev course', price: 199 },
    { name:'Complete pentesting course', price: 9 },
    { name:'Complete front end dev course', price: 109 },
    { name:'Big bounty and web app pentesting', price: 19 }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Course Purchase Page</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <CourseSales items={courses}/>
      </header>
    </div>
  );
}

export default App;

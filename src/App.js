import logo from './logo.svg';
import './App.css';
import Country from './Components/Country';

function App() {
  const title = 'Country List';

  return (
    <div className="App">
      <Country title={title}/>
    </div>
  );
}

export default App;

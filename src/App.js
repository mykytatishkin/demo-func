import logo from './logo.svg';
import './App.css';
import Country from './Components/Country';

function App() {
  const title = 'Country List';
  const countries = [
    {id: 1, name: "UK", capital: "London", population: 5000000},
    {id: 2, name: "France", capital: "Paris", population: 53000000},
    {id: 3, name: "Spain", capital: "Madrid", population: 45000000},
    {id: 4, name: "Italy", capital: "Rome", population: 15000000},
    {id: 5, name: "USA", capital: "Washington", population: 7765000000},
    {id: 6, name: "Canada", capital: "Toronto", population: 655000000},
  ];

  localStorage.setItem('items', JSON.stringify(countries));

  return (
    <div className="App">
      <Country title={title}/>
    </div>
  );
}

export default App;

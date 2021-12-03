import './App.css';
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList";
import countries from './countries.json';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <CountriesList />
      </Switch>
    </div>
  );
}
export default App;

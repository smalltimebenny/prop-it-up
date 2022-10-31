import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <PersonCard firstName = {"Frank"} lastName = {"Furter"} age = {"44"} hairColor ={"Brown"} />
        <PersonCard firstName = {"Patty"} lastName = {"O'Furniture"} age = {"88"} hairColor ={"White"} />
        <PersonCard firstName = {"B."} lastName = {"Swax"} age = {"0.4"} hairColor ={"None"} />
        <PersonCard firstName = {"Anita"} lastName = {"Bath"} age = {"29"} hairColor ={"Blonde"} />
      </p>
    </div>
  );
}

export default App;

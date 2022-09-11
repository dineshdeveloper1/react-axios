import './App.css';
import UserAdd from './UserAdd';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserAdd/>
        <UserList/>
      </header>
    </div>
  );
}

export default App;

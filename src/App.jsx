import './App.css';
import Home from './pages/index';
import { GlobalContext } from './contex';

function App() {
  const user = {
    username: 'Febrian',
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

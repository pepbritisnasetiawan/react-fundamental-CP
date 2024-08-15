import './App.css';
import { GlobalContext } from './contex';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  const user = {
    username: 'Febrian',
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

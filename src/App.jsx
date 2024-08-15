import './App.css'
import Article from './components/Article'

function App() {
  return (
    <div className='App'>
      <Article name="Febrian" titles={["Reactjs", "Nextjs", "Nodejs"]} />
      <br />
      <Article name="Tisna" titles={["Vuejs", "Nessjs", ".Net"]} />
    </div>
    
  )
}

export default App

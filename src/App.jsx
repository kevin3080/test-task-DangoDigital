import './scss/App.scss'
import {Title} from './components/Title'
import { SectionGrid } from './components/grids/SectionGrid'


function App() {
  return (
    <section className="App">
      <Title/>
      <SectionGrid/>
      <footer>Created by Kevin Pernia</footer>
    </section>
  )
}

export default App

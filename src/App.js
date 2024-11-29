import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MoviesList from './components/MoviesList'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <>
      <MyNav />
      <MoviesList />
      <MyFooter />
    </>
  )
}

export default App

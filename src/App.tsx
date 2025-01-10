import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Course from './pages/course/course';

function App() {

  return (
    <>
      {/* <Router basename="/code-runner"> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/course' element={<Course />}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App

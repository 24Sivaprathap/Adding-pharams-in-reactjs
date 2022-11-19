// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Error from './Pages/Error';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <Router>
   <Link to='/'>Home</Link>&nbsp;&nbsp;
   <Link to='/about'>About</Link>&nbsp;&nbsp;
   <Link to='/products'>Products</Link>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products/:id' element={<Products/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='*' element={<Error/>} />

    </Routes>
   </Router>
    </div>
  );
}

export default App;

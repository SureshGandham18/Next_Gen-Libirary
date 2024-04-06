import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Contact from './pages/Contact'
import LibraryStatus from './pages/LibraryStatus'
import BookAvailability from './pages/BookAvailability'
import BookRecom from './pages/BookRecom'


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/submit_data' element={<BookRecom/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/librarystatus' element={<LibraryStatus/>}></Route>
        <Route path='/bookavailability' element={<BookAvailability/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
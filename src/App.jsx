
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Project from './pages/Project'
 import Footer from './components/Footer'
 import Test from './components/Test'


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App

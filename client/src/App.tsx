import './App.css'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function RequireAuth() {
  const test = true;

  if (test) {
    return <Outlet />
  } else {
    return <Navigate to ='/login'/>
  }
}

const isAuthenticated = true;

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}/>

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>

        <Route path='/login' element={<Navigate to={isAuthenticated ? '/dashboard' : 'login'}/>}/>
        <Route path='/register' element={<Navigate to={isAuthenticated ? '/dashboard' : 'register'}/>}/>

      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'

import './styles/App.css'

import { Header } from './components/Header'

import { HomePage } from './routes/HomePage'
import { SearchPage } from './routes/SearchPage'
import { Clothes } from './routes/Clothes'
import { ClothesDetails } from './routes/ClothesDetails'
import { Login } from './components/auth/Login'

// import { PrivateRoute } from './routes/PrivateRoute'

// Components

const ProtectedRoute = ({ children }) => {
  // const { isAuthenticated } = useAuth()
  // if (!isAuthenticated) {
  //   return <Navigate to='/login' />
  // }

  return children
}

export const App = () => {
  return (

    <div className='App'>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
        <Route path='/clothes/:name' element={<Clothes />}>
          <Route path='details' element={<ClothesDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  )
}

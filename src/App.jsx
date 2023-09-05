import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from "./components/Products"
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import RootLayout from './components/RootLayout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>

    </>
  )
}

export default App

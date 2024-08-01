import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import Index from './Pages/Index'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
    </>
  )
)


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
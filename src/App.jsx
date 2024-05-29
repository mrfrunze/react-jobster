import { Landing, Register, Error } from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Stats, AddJob, AllJobs, Profile, SharedLayout} from "./pages/dashboard" 


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Stats/>} />
        <Route path="all-jobs" element={<AllJobs/>} />
        <Route path="add-job" element={<AddJob/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
      <Route path='landing' element={<Landing />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <ToastContainer position="top-center" autoClose={1000} />
  </BrowserRouter>
  )
}

export default App

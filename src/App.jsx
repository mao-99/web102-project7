import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideNav from './components/sidenav'
import CreateCrewmate from './components/create'
import Gallery from './components/gallery';
import UpdateCrewmate from './components/update';
import Details from './components/details';
import './App.css'
import Home from './components/home'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
function App() {
  return (
    <>
      <Router>
        <div className="body">
          <SideNav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateCrewmate/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/edit/:id' element={<UpdateCrewmate />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

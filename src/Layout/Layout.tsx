import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout() {
  return (


<div>
    <Navbar/>
        <div 
             style={{ minHeight: '100vh', backgroundColor: '#FFFFF' }}
             className=''>
                <Outlet />
        </div>
    <Footer/>
</div>

  )
}

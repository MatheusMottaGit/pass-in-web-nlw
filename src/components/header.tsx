import logo from '../assets/logo.svg'
import NavLink from './nav-link'

const Header = () => {
  return (
    <div className='flex items-center gap-4 py-2'>
      <img src={logo}/>

      <nav className='space-x-3'>
        <NavLink href='/events'>Events</NavLink>
        
        <NavLink href='/participants'>Participants</NavLink>
      </nav>
    </div>
  )
}

export default Header
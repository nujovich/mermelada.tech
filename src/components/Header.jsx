import { MenuItem } from './MenuItem'
import './styles/header.css'
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <img src='/mermelada-logo.svg' alt='Mermelada.tech logo' />
          </a>
        </div>
        <nav className='menu'>
          <ul>
            <MenuItem name='Nosotras' />
            <MenuItem name='Blog' /> 
            <MenuItem name='Proyectos' />
            <MenuItem name='Eventos' />
          </ul>
        </nav>
        <div className="patreon-link">
          <a href="https://www.patreon.com/mermelada.tech" target="_blank" rel="noreferrer">Patreon</a>
        </div>
      </div>
    </header>
  )
}

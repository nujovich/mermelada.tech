import './styles/header.css'
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <img src='/mermelada.svg' alt='Mermelada.tech logo' />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/comunidad'>Comunidad</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

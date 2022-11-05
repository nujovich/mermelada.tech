import './styles/header.css'
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <img src='/mermeladatech.jpeg' alt='Mermelada.tech logo' />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
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

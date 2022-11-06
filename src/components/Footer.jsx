import './styles/footer.css'
export const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container'>
        <div>
          <h3>Mermelada.tech 🌈💜</h3>
          <p>Creando comunidades de mujeres en tecnología</p>
        </div>
        <div>
          <h3>Links</h3>
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
        </div>
        <div className='social-media'>
          <a href='https://instagram.com/mermelada.tech_'>
            <img src='../../instagram.png' />
          </a>
          <a href='https://discord.gg/jEV7cc4t'>
            <img src='../../discord.png' />
          </a>
          <a href='https://twitter.com/MermeladaTech'>
            <img src='../../twitter.png' />
          </a>
          <a href='https://www.linkedin.com/company/mermelada-tech'>
            <img src='../../linkedin.png' />
          </a>
        </div>
      </div>
    </footer>
  )
}

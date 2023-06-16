import './styles/landing.css'
export const Landing = () => {
  const onSumateOnClick = () => {
    window.open("https://linktr.ee/mermeladatech", "_blank")
  }
  return (
    <section className='landing-page'>
      <h1 className='title'>¡Hola! Somos MERMELADA.TECH</h1>
      <h2 className='sub-title'>Una comunidad de mujeres en tecnología</h2>
      <iframe src="https://www.youtube.com/embed/eBJNT8KV0ps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <button type='button' className='btn-sumate' onClick={() => onSumateOnClick()}>Sumate a la comu</button>
    </section>
  )
}

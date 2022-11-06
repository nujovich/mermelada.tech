import { Card } from './Card'
import './styles/about.css'

export const About = () => {
  return (
    <section class='about-page'>
      <h1>Sobre Nosotras</h1>
      <Card
        title={'¿Quiénes sómos?'}
        description={
          'Es una comunidad de mujeres para mujeres, a fin de reforzar nuestros conocimientos en diferentes lenguajes de programación con el aporte de todas y cada una. Buscamos tener un ambiente de apoyo, respeto, contención y compañerismo. No se espera impartir cursos o bootcamps, si no establecer workshops y ambientes colaborativos en base a diferentes niveles, con el objetivos de potenciar la motivación en equipo.'
        }
      />
      <Card
        title={'Metodología'}
        description={
          'Aprenderemos mediante la colaboración en distintos proyectos de código abierto adaptados a los niveles de cada integrante. ¡Puedes incluirlos en tu porfolio para ampliar tu trabajo!'
        }
      />
      <Card
        title={'Enfoque'}
        description={
          'Si bien los workshop compartidos son de carácter informativo y no cursos certificados, tendrán contenido de valor que serán útiles para tener el conocimiento básico que luego se podrá profundizar de forma autodidacta. Entre todas crearemos rutas de aprendizaje más amigables y no tan agobiantes.'
        }
      />
    </section>
  )
}

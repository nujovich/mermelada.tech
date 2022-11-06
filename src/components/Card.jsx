import './styles/card.css'
export const Card = ({ title, description }) => {
  return (
    <div className='card-container'>
      <h1 className='card-title'>{title}</h1>
      <p className='card-description'>{description}</p>
    </div>
  )
}

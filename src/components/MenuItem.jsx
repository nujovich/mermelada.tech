import './styles/menu-item.css'
export function MenuItem({ name }) {
  return (
    <li>
      <a className="menu-item" href={`/${name}`}>{name}</a>
    </li>
  )
}
import { Link } from 'react-router-dom'

export const SearchPage = () => {
  const clothes = ['Nike', 'Adidas', 'Puma', 'Umbro']
  return (
    <div>
      <h1>SearchPage</h1>
      <ul>
        {clothes.map(clothe => (
          <li key={clothe}><Link to={`/clothes/${clothe}`}> {clothe} </Link></li>
        ))}
      </ul>
    </div>
  )
}

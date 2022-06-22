import { useParams } from 'react-router-dom'

export const ClothesDetails = () => {
  const { name } = useParams()
  return (
    <div>
      <h1> T-shirt {name}</h1>
    </div>
  )
}

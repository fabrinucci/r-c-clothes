import { Link, Outlet, useParams } from 'react-router-dom'

export const Clothes = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Clothes</h1>
      {name}
      <Link to='details'>Go to details</Link>
      <Outlet />
    </div>
  )
}

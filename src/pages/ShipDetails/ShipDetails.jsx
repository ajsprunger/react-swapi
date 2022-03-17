import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

const ShipDetails = () => {
  let location = useLocation()
  let shipDetails = location.state.shipName

  return(
    <>
      <div className='ship-container'>
        {shipDetails.name ?
        <div className='ship-details'>
          <p>NAME: {shipDetails.name}</p>
          <p>MODEL: {shipDetails.model}</p>
          <Link className="link" to='/'>RETURN</Link>
        </div>
        :
        <h2>
          Loading ship details...
        </h2>
        }
      </div>
    </>
  )
}

export default ShipDetails
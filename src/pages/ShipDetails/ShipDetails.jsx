import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const ShipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.shipName.url)
    .then(shipDetails => setShipDetails(shipDetails))
  }, [])

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
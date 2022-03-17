import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getShipList } from '../../services/api-calls'


const ShipList = (props) => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    getShipList() 
    .then(shipData => setShips(shipData.results))
  }, [])

  return (
    <>
    <div className='ship-container'>
    {ships.length ?
      <div className='icon-container'>
        {ships.map((shipName) => (
          <Link className="link" to='/ship' state={{shipName}} key={shipName.name}>
            <div id='shipDiv'>
              {shipName.name}
            </div>
          </Link>
        ))}
      </div>
      :
      <div>
        <h2>Loading Ships...</h2>
      </div>
    } 
    </div>
    </>
  )
}

export default ShipList
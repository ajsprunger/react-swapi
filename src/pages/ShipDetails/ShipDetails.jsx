import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import getPilots from '../PilotList/PilotList';

const ShipDetails = () => {
  let location = useLocation()
  let shipDetails = location.state.shipName
  const pilotUrls = location.state.shipName.pilots

  console.log('get', getPilots(pilotUrls))

  return(
    <>
      <div className='ship-container'>
        {shipDetails.name ?
        <div className='ship-details'>
          <p>NAME: {shipDetails.name}</p>
          <p>MODEL: {shipDetails.model}</p>
          {pilotUrls.length ?
          <div>
            {getPilots(pilotUrls).map(pilotName => {
              return <div>{pilotName}</div>
            })}
          </div>
          :
          <p>No Pilots</p>
          } 
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
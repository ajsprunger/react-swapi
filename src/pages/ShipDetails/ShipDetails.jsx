import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getPilots from '../PilotList/PilotList';


const ShipDetails = () => {
  const [names, setNames] = useState([])
  let location = useLocation()
  let shipDetails = location.state.shipName
  const pilotUrls = location.state.shipName.pilots

  useEffect(() => {
    const retrieve = async() => {
      const pilots = await getPilots(pilotUrls)
      setNames(pilots)
    }  
    retrieve()
  }, [pilotUrls])

  return(
    <>
      <div className='ship-container'>
        {shipDetails.name ?
        <div className='ship-details'>
          <p>NAME: {shipDetails.name}</p>
          <p>MODEL: {shipDetails.model}</p>
          {pilotUrls.length ?
          <div>
            {names.map(pilotName => {
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

async function getPilots(urls) {
  const promises = await urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  const pilotNames =  pilotObjects.map(pilot => {
    return pilot.name  
  })
  return pilotNames
}

export default getPilots


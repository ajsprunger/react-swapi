const baseUrl = 'https://swapi.dev/api/'

export function getShipList() {
  return fetch(`${baseUrl}starships`)
  .then(res => res.json())
}

export function getDetails(ship) {
  return fetch (ship)
  .then(res => res.json())
}
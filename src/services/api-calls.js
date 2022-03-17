const baseUrl = 'https://swapi.dev/api/'

export function getShipList() {
  return fetch(`${baseUrl}starships`)
  .then(res => res.json())
}

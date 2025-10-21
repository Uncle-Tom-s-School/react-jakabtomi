import { useEffect, useState } from 'react'

type Beer = {
  image: string
  name: string
  abv: string
  volume: string
  price: number
  available: boolean
}

const BeerCard = () => {
  const [beers, setBeers] = useState<Beer[]>([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: Beer[]) => setBeers(data))
  }, [])

  return (
    <>
      {beers.map((beer) => (
        <div className="beerCard">
          <img
            src={`/${beer.image}`}
            alt={beer.name}
          />
          <div>
            <h4>
              {beer.name} <span>{beer.abv} {beer.volume}</span>
            </h4>
            <p>{beer.price} Ft</p>
            <a className={beer.available ? 'available' : 'notAvailable'} href="#">
              {beer.available ? 'Raktáron' : 'Nincs raktáron'}
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default BeerCard
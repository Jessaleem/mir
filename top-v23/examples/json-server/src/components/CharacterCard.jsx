import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = (props) => {

  const {personajes} = props
  
  return(

    personajes.map((character) => (
      
     
    <div key= {character.id}>          
    <article className="characterCard__Wrapper">
      <div className="characterCard__ImgWrapper">
        <img src={character.image} alt={character.name}  />
      </div>
      <div className="characterCard__ContentWrapper">
        <div className="section">
          
          <a href={character.url} rel="nofollow noopener noreferrer" target="_blank">
            <h2>{character.name}</h2>
          </a>
          <span className="status">
            <span className="status__icon"></span> {character.status} - {character.species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <p className="text-white">
          {character.location.name}
          </p>
        </div>
      </div>
    </article>
     </div>
    
    )
      
    )
    
  )
}

export default CharacterCard

import React, { Fragment, useContext, useEffect } from 'react'
import CharacterListContext from '../context/CharacterList';
import CharacterDetail from './chaarcter-detail';


const CharacterDetailContainer = ({ id, character }) => {

    return (
        <div className="character-detail-container vw-100 vh-100 d-flex">
            {character && ( <Fragment>
                <div className="character-img-container vw-40 ">
                    <img src={character.img}></img>
                </div>
                <div className="character-detail-container vw-60 bg-ternary d-flex text-white align-items-center justify-content-center ">
                    <CharacterDetail detail={character}></CharacterDetail>
                </div>
            </Fragment>)}
        </div>
    )
}

export default CharacterDetailContainer


/* <div className="character-img-container">
<img src={targetCharacter.img}></img>
</div>
<div className="character-detail-container">
{targetCharacter.name}
</div> */

/* useEffect(() => {
    targetCharacter = characterList.find((item) => {
        console.log([item.char_id, id])
        console.log()
        return item.char_id == parseInt(id)
    })
    console.log(targetCharacter)
}, []) */
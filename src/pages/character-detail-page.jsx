import React, { useContext,Fragment } from 'react'
import CharacterDetailContainer from '../components/character-detail-container';
import CharacterQuoteContainer from '../components/character-quote-container';
import CharacterListContext from '../context/CharacterList';


const CharacterDetailPage = ({ match }) => {
    const {
        params: { characterId },
    } = match;

    const { characterList } = useContext(CharacterListContext)
    const targetCharacter = characterList.find((item) => {
        return item.char_id === parseInt(characterId)
    });

    console.log(characterList)

    console.log([characterList, targetCharacter])
    return (
        <div className="character-detail=page">
            {characterList.length && (
                <Fragment>
                    <CharacterDetailContainer id={characterId} character={targetCharacter} />
                    <CharacterQuoteContainer id={characterId} character={targetCharacter} />
                </Fragment>
            )}

        </div>
    )
}

export default CharacterDetailPage;

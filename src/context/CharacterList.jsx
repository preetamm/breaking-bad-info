import React, { createContext, memo, useState, useEffect } from 'react';

const initialState = {
    currentPage: 0,
    setCurrentPage : () => { },
    limit: 10,
    setLimit: () => { },
    characterList: [],
    setCharacterList: () => { }
}
const CharacterListContext = createContext(initialState)

const myStorage = window.sessionStorage;
const CharacterListProvider = ({ children }) => {
    const [characterList, setCharacterList] = useState(initialState.characterList)
    const [limit, setLimit] = useState(initialState.limit)
    const [currentPage, setCurrentPage] = useState(initialState.currentPage)

    useEffect(() => {
        const characterList = JSON.parse(myStorage.getItem('characterList')) || initialState.characterList
        //console.log(JSON.parse(myStorage.getItem('characterList')) )
        setCharacterList(characterList)
    }, [])


    useEffect(() => {
        myStorage.setItem('characterList', JSON.stringify(characterList))
    }, [characterList])


    return (
        <CharacterListContext.Provider value={{ characterList, limit, currentPage, setCharacterList, setLimit, setCurrentPage }}>
            {children}
        </CharacterListContext.Provider>
    )

  
}


export default CharacterListContext

const memoizedProvider = memo(CharacterListProvider);

export { memoizedProvider as CharacterListProvider }


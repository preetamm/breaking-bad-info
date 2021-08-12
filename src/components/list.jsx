import React, { useEffect, useContext, useState, useMemo, memo } from 'react'
import CharacterListContext from '../context/CharacterList'
import Api from '../data/api'
import useAxios from '../hooks/useAxios'
import CharacterCard from './character-card'


const List = ({ searchQuery }) => {
    const {characterList, setCharacterList } = useContext(CharacterListContext)
    const characterEndPoint = Api()
    let url;
    if (searchQuery.length) {
        url = characterEndPoint.character().setAttibute('name', searchQuery).endPoint
    } else {
        url = characterEndPoint.character().endPoint
    }
    let { response, error, loading } = useAxios({ url: url })
    if(response)  setCharacterList(response)

    return useMemo(() => {
        return (
            <div className="list w-100">
                {loading ? (
                    <p>loading...</p>
                ) : response.map((item) => (
                    <CharacterCard key={item.char_id} data={item} />
                ))}
            </div >
        )
    }, [response,error, loading,searchQuery])
}

export default memo(List)

import React, { useMemo } from 'react'
import Api from '../data/api';
import useAxios from '../hooks/useAxios';

const CharacterQuoteContainer = ({ character }) => {
    const url = Api().quote().setAttibute('author', character.name).endPoint
    let { response, loading } = useAxios({ url: url })
    return useMemo(() => {
        return (
            <div className="character-quote-container  d-flex  vw-100 vh-100 bg-black text-white">
                <div className="quote-list-wrapper mt-4 w-60 position-relative d-flex flex-column align-items-start">
                    <div className="label-quote fs-40 mb-4" >Quote</div>
                    <div className=" h-100 overflow-scroll ms-4 quote-list d-flex flex-column align-items-start align-self-center">
                        {loading ? (
                            <p>loading...</p>
                        ) : response.map((item) => (
                            <p className="text-start">{item.quote}</p>
                        ))}

                    </div>
                </div>
            </div>
        )
    }, [response, loading])
}

export default CharacterQuoteContainer;

import React, { memo } from 'react'
import { Link} from "react-router-dom";

const CharacterCard = ({ data }) => {
    return (
        <Link to={`/character/${data.char_id}`}>
            <div className=' character-card bg-secondary'>
                <img src={data.img} alt='' ></img>
            </div>
        </Link>
    )
}

export default memo(CharacterCard);

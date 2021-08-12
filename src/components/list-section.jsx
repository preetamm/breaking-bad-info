import React, {useState} from 'react';
import CharacterCard from './character-card';
import List from './list';


const ListSection = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <div className="list-section vw-100 min-h-100  bg-black ">
            <div className="list-container align-items-center p-4 w-100">
                <div className="search-bar-wrapper d-flex justify-content-center mb-4">
                    <div className="searchBar bg-secondary px-4 ">
                        <input className="border-none" onChange={handleChange} value={searchQuery}></input>
                    </div>
                </div>
                <List searchQuery={searchQuery}></List>
            </div>
        </div>
    );
}

export default ListSection;

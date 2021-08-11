import React from 'react';

const ListSection = () => {
    return (
        <div className="list-section vw-100 vh-100 bg-black">
            <div className="list-container d-flex flex-column align-items-center p-4 w-100">
                <div className="searchBar bg-secondary p-2 w-5 h-2">
                    <input className="bg-secondary border-none"></input>
                </div>
                <div className="list d-flex flex-wrap">

                </div>
            </div>
        </div>
    );
}

export default ListSection;

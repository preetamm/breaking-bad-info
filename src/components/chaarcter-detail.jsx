import React from 'react'

const CharacterDetail = ({ detail }) => {
    return (
        <div class='character-detail d-flex flex-column align-items-start'>
            <div className="label-name fs-20 fw-bold">Name</div>
            <p className="name fs-16 fw-light">{detail.name}, {detail.nickname}</p>
            <div className="label-portrayed fs-20 fw-bold">Portrayed by</div>
            <p className="portrayed fw-normal">{detail.portrayed}</p>
            <div className="label-date-of-birth fs-20 fw-bold">Born</div>
            <p className="date-of-birth fs-12 fs-normal">{detail.birthday}</p>
            <div className="label-occupation-status fs-20 fw-bold">Occupation & status</div>
            <p className="occupation-status fs-12 fs-normal">{detail.occupation}, {detail.status}</p>
            <div className="label-apperance  fs-20 fw-bold">Appeared in</div>
            <p className="apperance fs-12 fs-normal">{detail.appearance}</p>
        </div>
    )
}

export default CharacterDetail;

import React from 'react';

const Model = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    } 

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Model;
import React from 'react'

const Backdrop = ({ changeIsVissible }) => {
    return (
        <div onClick={changeIsVissible} className="fixed top-0 left-0 w-full h-full z-10 backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-contrast-10">
        </div>
    )
}

export default Backdrop

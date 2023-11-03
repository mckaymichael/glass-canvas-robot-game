import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default function GridCells() {
    const cells = Array.from({ length: 25}, (_, index) => (
        <div key={index} className={`grid-cell cell-${index}`}>
            {index === 12 ? (
                <FontAwesomeIcon icon={faRobot} />
            ) : (
                index
            )}
        </div>
        ))
    return (
        <div className="grid-container">
            {cells}
        </div>
    )
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const robot = <FontAwesomeIcon icon={faRobot} />;

export default function GridCells({
  robotDirection,
  robotIndex,
  moveRobot,
  starPosition,
  neighbors,
}) {
  let rotationAngle = 0;

  switch (robotDirection) {
    case "up":
      rotationAngle = 0;
      break;
    case "down":
      rotationAngle = 180;
      break;
    case "left":
      rotationAngle = -90;
      break;
    case "right":
      rotationAngle = 90;
      break;
    default:
      rotationAngle = 0;
  }

  const robotStyle = {
    transform: `rotate(${rotationAngle}deg)`,
  };

  return (
    <div className="grid-container">
      {Array.from({ length: 25 }, (_, index) => {
        const isVisible = neighbors.includes(index);
        const isStar = index === starPosition;

        return (
          <div key={index} className={`grid-cell cell-${index}`}>
            {index === robotIndex ? (
              <div
                className="robot"
                onClick={() => moveRobot(index)}
                style={robotStyle}
              >
                {robot}
              </div>
            ) : isStar ? (
              <div className="star">⭐</div>
            ) : null
            }
          </div>
        );
      })}
    </div>
  );
}

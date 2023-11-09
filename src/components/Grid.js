import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

let valueValues = [];

export default function Grid({ gridSize }) {
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(" + Math.sqrt(gridSize) + ", 1fr)",
  };

  const gridCells = Array.from({ length: gridSize }, (_, index) =>
    index === Math.floor(gridSize / 2) ? (
      <div value={index} className="grid-cell">
        <FontAwesomeIcon icon={faRobot} />
      </div>
    ) : (
      <div value={index} className="grid-cell"></div>
    )
  )

  valueValues = gridCells.map((e) => e.value);

  return (
    <div style={gridContainer}>
      {gridCells}
    </div>
  );
}

export { valueValues };

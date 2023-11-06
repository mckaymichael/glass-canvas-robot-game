export default function Grid({ gridSize }) {
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(" + Math.sqrt(gridSize) + ", 1fr)",
  };
  return (
    <div style={gridContainer}>
      {Array.from({ length: gridSize }, (_, index) =>
        index === Math.floor(gridSize / 2) ? (
          <div key={index} className="grid-cell">
            test
          </div>
        ) : (
          <div key={index} className="grid-cell"></div>
        )
      )}
    </div>
  );
}

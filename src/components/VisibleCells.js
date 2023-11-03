import React from "react";

export default function VisibleCells(currentPosition) {
  const numRows = 5;
  const numCols = 5;
  const row = Math.floor(currentPosition / numRows);
  const col = currentPosition % numCols;

  // Calculate neighbouring indices
  const neighbours = [];

  // Left neighbour
  if (col > 0) {
    neighbours.push(currentPosition - 1);
  }

  // Right neighbour
  if (col < numCols - 1) {
    neighbours.push(currentPosition + 1);
  }

  // Top neighbour
  if (row > 0) {
    neighbours.push(currentPosition - numRows);
  }

  // Bottom neighbour
  if (row < numRows - 1) {
    neighbours.push(currentPosition + numRows);
  }

  return neighbours;
}
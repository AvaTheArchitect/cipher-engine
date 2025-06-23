// cipher-engine/modules/musicTheory.js

export function detectMode(notesArray) {
  return "Mixolydian";
}

export function calculateInterval(fret1, fret2) {
  return Math.abs(fret2 - fret1);
}

export function suggestGuitarShape(scale, position) {
  return `Pattern for ${scale} at fret ${position}`;
}

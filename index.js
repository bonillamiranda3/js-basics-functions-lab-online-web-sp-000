// Code your solution in this file!


function distanceFromHqInBlocks (street) {
  return Math.abs(42-street)
}

function distanceTravelledInFeet (street) {
  return Math.abs(start - end) * 264
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street) * 264
}

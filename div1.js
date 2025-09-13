let initialSpeed = 30;
let maxSpeed = 120;
let totalMinutes = 96;
let intervalMinutes = 10;
let distance = 0;
let currentSpeed = initialSpeed;
let speedPattern = [30, 60, 90, 120, 120, 120, 120, 120, 120, 102];
for (let i = 0; i < speedPattern.length; i++) {
  let intervalHours = intervalMinutes / 60;
  distance += speedPattern[i] * intervalHours;
}
console.log("Total distance traveled: " + distance.toFixed(2) + " km");
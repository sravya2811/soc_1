let initialSpeed = 60;       // starting speed in km/h
let maxSpeed = 120;          // maximum speed cap
let totalMinutes = 96;       // total travel time in minutes
let intervalMinutes = 7;    // speed doubles every 10 minutes
let distance = 0;
let currentSpeed = initialSpeed;

for (let minute = 0; minute < totalMinutes; minute += intervalMinutes) {
  // Convert interval to hours for distance calculation
  let intervalHours = intervalMinutes / 60;

  // Add distance for this interval
  distance += currentSpeed * intervalHours;

  // Double speed for next interval, but cap it at maxSpeed
  currentSpeed = Math.min(currentSpeed * 2, maxSpeed);
}

console.log("Total distance traveled: " + distance.toFixed(2) + " km");


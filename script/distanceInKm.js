// Define the constant event date
const eventDate = new Date('2019-02-10T23:00:00');

// Constant velocity in km/s
const velocity = 90;

// Function to calculate and update the distance
function updateDistance() {
  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in seconds
  const timeDiff = (currentTime.getTime() - eventDate.getTime()) / 1000;

  // Calculate the distance
  const distance = timeDiff * velocity;

  // Display the distance
  document.getElementById("distance").innerHTML = `Distance: ${distance} km`;

  // Output the distance to the console
  console.log(`Distance: ${distance} km`);
}

// Update the distance every second
setInterval(updateDistance, 1000);

// Define the constant event date
const eventDate = new Date('2019-02-10T23:00:00');

// Function to update the counter
function updateCounter() {
	// Get the current time
	const currentTime = new Date();

	// Calculate the time difference in milliseconds
	const timeDiff = currentTime.getTime() - eventDate.getTime();

	// Calculate the days, hours, minutes, and seconds
	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	// Display the counter values
	document.getElementById("clock").innerHTML = (`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
}

// Update the counter every second
setInterval(updateCounter, 1000);



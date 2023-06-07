const eventDate = new Date('2019-02-10T23:00:00');
function updateCounter() {
    const currentTime = new Date();

    const timeDiff = currentTime.getTime() - eventDate.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = (`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
    
    let velocity = 6000;

    let distance = timeDiff/1000 * velocity;
    document.getElementById("distance").innerHTML = `${Math.round(distance)} km`; 

    let oneway = distance / 299792;
    document.getElementById("oneWay").innerHTML = `${Math.round(oneway/60/60)} Light hours`;

    document.getElementById("Velocity").innerHTML = `${velocity} km/s`;
}

setInterval(updateCounter, 1000);
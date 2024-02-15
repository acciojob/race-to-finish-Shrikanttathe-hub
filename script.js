// script.js
const promises = Array.from({ length: 5 },() => getRandomPromise());

function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
}

function getRandomPromise() {
    const randomTime = getRandomTime();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved in ${randomTime} milliseconds`);
        }, randomTime);
    });
}

Promise.any(promises)
    .then((result) => {
        const outputDiv = document.getElementById("output");
        outputDiv.innerText = result;
    })
    .catch((error) => {
        console.error("All promises failed:", error);
    });

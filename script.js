const promises = Array.from({ length: 5 }, (_, index) => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${index + 1} resolved after ${randomTime} milliseconds`);
        }, randomTime);
    });
});

Promise.any(promises)
    .then((result) => {
        // Print the result to the console (modify as needed)
        console.log(result);

        // If you want to print the result to a div with id "output":
        // const outputDiv = document.getElementById('output');
        // outputDiv.innerText = result;
    })
    .catch((error) => {
        console.error(error);
    });

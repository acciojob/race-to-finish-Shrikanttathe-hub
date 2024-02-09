// Already declared array of promises
const promises = [
  // Add your promises here
  new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), Math.floor(Math.random() * 5000) + 1000))
];

// Wait for the first promise to resolve using Promise.any
Promise.any(promises)
  .then(result => {
    // Print the result to the div with id "output"
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => console.error(error));

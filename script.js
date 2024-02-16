const promises = Array.from({ length: 5 }, getRandomPromise);

function getRandomPromise() {
  const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} milliseconds`);
    }, delay * 1000);
  });
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });

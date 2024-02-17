const promises = Array.from({ length: 5 }, getRandomPromise);

Promise.any(promises)
  .then((result) => {
    document.getElementById('output').innerText = `Resolved with result: ${result}`;
  })
  .catch((error) => {
    console.error('All promises rejected:', error);
  });

function getRandomPromise() {
  const delay = Math.floor(Math.random() * 100) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}
win.promises;

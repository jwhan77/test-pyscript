// const pyRepl = document.getElementsByTagName('py-repl');

// console.log(pyRepl);
// console.log(pyRepl.length)

const container = document.getElementById('repl-container');

document.getElementById('add').addEventListener('click', (e) => {
  const newRepl = document.createElement('py-repl');
  container.appendChild(newRepl);
})
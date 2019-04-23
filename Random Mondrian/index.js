const painting = document.getElementById('painting');
const columns = [1, 1, 1, 1, 2, 2, 3, 3, 4];
const rows = [1, 1, 1, 1, 2, 2, 3, 3, 4];
const colors = [
  'white',
  'white',
  'white',
  'white',
  'white',
  'yellow',
  'red',
  'black',
  'blue'
];

for (let i = 0; i < 30; i++) {
  const cell = document.createElement('div');
  cell.style.gridColumn =
    'span ' + columns[Math.floor(Math.random() * columns.length)];
  cell.style.gridRow = 'span ' + rows[Math.floor(Math.random() * rows.length)];
  cell.style.background = colors[Math.floor(Math.random() * colors.length)];
  cell.style.border = 'black 5px solid';
  painting.appendChild(cell);
}

for (let i = 0; i < 10; i++) {
  const cell = document.createElement('div');
  cell.style.gridColumn = 'span 1';
  cell.style.gridRow = 'span 1';
  cell.style.background = 'white';
  cell.style.border = 'black 5px solid';
  painting.appendChild(cell);
}

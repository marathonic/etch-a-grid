let container = document.getElementById('container');


function squarey() {
    for (i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.setAttribute('class', 'grid');
    square.setAttribute('id', 'hoverid');
    container.appendChild(square);
    square.addEventListener('mouseover', function() {
      square.classList.add('hovering');
    });

  }

}

squarey();
/*
let grid = document.getElementsByClassName('grid');
grid.onmouseover()
*/
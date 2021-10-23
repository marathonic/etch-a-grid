let container = document.getElementById('container');


function squarey() {
    for (i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.setAttribute('class', 'grid');
    container.appendChild(square);
    square.addEventListener('mouseover', function() {
      square.classList.toggle('hovering');
    });

  }

}

squarey();
/*
let grid = document.getElementsByClassName('grid');
grid.onmouseover()

PSEUDOCODE FOR SECOND HOVER PASS:
if (square.classList = 'hovering'){
  square.classList.add('hoverTwo');
}
*/
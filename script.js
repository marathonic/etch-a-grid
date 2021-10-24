let container = document.getElementById('container');
let numbey;

function squarey(num) {

  numbey = num;
  container.style.gridTemplateColumns = 'repeat(' + numbey + ', 1fr)';
  container.style.gridTemplateRows = 'repeat(' + numbey + ', 1fr)';
  
  for (i = 0; i < num; i++) {
    let square = document.createElement('div');
    square.setAttribute('class', 'grid');
    
    
    container.appendChild(square);
    square.addEventListener('mouseover', function() {
      square.classList.toggle('hovering');
    });

    for (j = 0; j < num; j++) {
      let square = document.createElement('div');
      square.setAttribute('class', 'grid');
      
      
      container.appendChild(square);
      square.addEventListener('mouseover', function() {
        square.classList.toggle('hovering');
      });
  
    }

  }
 
}



squarey(2);



/*
let grid = document.getElementsByClassName('grid');
grid.onmouseover()

PSEUDOCODE FOR SECOND HOVER PASS:
if (square.classList = 'hovering'){
  square.classList.add('hoverTwo');
}
*/
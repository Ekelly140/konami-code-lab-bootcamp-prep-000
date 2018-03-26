const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector('body');
var check = [] ;


function init() {
  
    body.addEventListener('keydown', function(e) {
    check.push(e.which)
    console.log(check);
  });

  
}
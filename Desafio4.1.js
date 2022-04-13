document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=> {
        square.addEventListener('click', handleClick);
    })
})

     function handleClick(event){

         let square = event.target;

         let position = square.id;

         if(handleMove(position)) {

            setTimeout(() => {
                alert("O jogo acabou!")
            }, 20);
             
         };
         updateSquare(position);
     }

    function updateSquare(position) {
        let square = document.getElementById(position.toString());
        let symbol = board[position];
        square.innerHTML = `<div class='${symbol}'></div>`
    }

    // let div = document.querySelector('div');
    // let btn = document.querySelectorAll('.square');

    // div.addEventListener('click', ()=> {
    //     btn.forEach(div => div.value = '');
    // })


    
     function updateSquares(){
         let squares = document.querySelectorAll(".square");

         squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];

            if (symbol != '') {
                square.innerHTML = `<div class='${symbol}'></div>`
            }
         })
     }
     
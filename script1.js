'use strict';

// задание 1
// пока без разлиновки

function getBoard() {
    let board = document.querySelector('.board');
    let color = true;

    for (let i = 0; i < 64; i++) {

        let cell = document.createElement('div');
        if (i % 8 === 0) color = !color;
        if (color) cell.className = 'cell black';
        else cell.className = 'cell white';

        board.appendChild(cell);
        color = !color;
    }
}

getBoard();
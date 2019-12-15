'use strict';

const chess = {
    board: document.getElementById('chess'),
    letters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    numbers: ['', '1', '2', '3', '4', '5', '6', '7', '8'],

    getBoard() {
        for (let i = 0; i < 9; i++) {
            const tr = document.createElement('tr');
            this.board.appendChild(tr);

            for (let j = 0; j < 9; j++) {
                const td = document.createElement('td');
                td.dataset.row = i.toString();
                td.dataset.col = j.toString();
                tr.appendChild(td);
                if (td.dataset.row === '0') {
                    td.innerHTML = this.letters[j];
                    td.className = 'tan';
                }
                if (td.dataset.col === '0') {
                    td.innerHTML = this.numbers[i];
                    td.className = 'tan';
                }
                if (+td.dataset.row > 0 && td.dataset.row % 2 !== 0 && +td.dataset.col > 0 && +td.dataset.col % 2 === 0) {
                    td.className = 'black';
                }
                if (+td.dataset.row > 0 && td.dataset.row % 2 === 0 && +td.dataset.col > 0 && +td.dataset.col % 2 !== 0) {
                    td.className = 'black';
                }
            }
        }
    },
};

window.addEventListener('load', () => {
   chess.getBoard();
});


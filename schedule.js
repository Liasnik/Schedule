// Добавляю строки с ячейками. Пока получилось добавить только 
// по одной строке к каждой таблице...

//const table = document.getElementById('schedule-table');
//const tbody = table.getElementByITegName(".table-1"')
const tbody = document.querySelector(".table-1");

const newRow = document.createElement('tr');

// const dayCell = document.createElement('td');
// dayCell.textContent = 'Понед';
// newRow.appendChild(dayCell);

// const nameCell = document.createElement('td')
// nameCell.textContent = 'Джон';
// newRow.appendChild(nameCell);

// const timeCell = document.createElement('td')
// timeCell.textContent = '18:00 - 19:00';
// newRow.appendChild(timeCell);

function addRow1() {
    const tbody1 = document.querySelector(".table-1");
    //console.log(tbody1);
    const newRow1 = document.createElement('tr');
    //console.dir(newRow1);

    for (let i = 0; i < 7; i++) {
        const Cell = document.createElement('td');
        Cell.innerHTML = '<textarea cols="16"></textarea>';
        newRow1.appendChild(Cell);
    }

   return tbody1.appendChild(newRow1);
}
//addRow1()

const button1 = document.querySelector('.button-1')
button1.addEventListener('click', clickHandler1)

function clickHandler1() {
    addRow1();
    
}


const tbody2 = document.querySelector(".table-2");
const newRow2 = document.createElement('tr');

function addRow2() {
   

    for (let i = 0; i < 8; i++) {
        const Cell = document.createElement('td');

        if (i === 0) {
            Cell.innerHTML = '<textarea cols="8" rows="1"></textarea>';
        }
        else (Cell.innerHTML = '<input><input>');
        newRow2.appendChild(Cell);   
    }

    tbody2.appendChild(newRow2);  
     
};
//addRow2()

const button2 = document.querySelector('.button-2')
button2.addEventListener('click', clickHandler2)

function clickHandler2() {
    addRow2()
}

const button2_2 = document.querySelector('.button-2-2')
button2_2.addEventListener('click', clickHandler2_2)

function clickHandler2_2() {
    newRow2.remove()
}



function addRow3(colback) {
    const newRow3 = document.createElement('tr');

    for (let i = 0; i < 8; i++) {
        const cell = document.createElement('td');
        //Cell = document.createElement('input')
        cell.innerHTML = '<input>';
        newRow3.appendChild(cell);
        
    }

    return colback.appendChild(newRow3);
}

const tbody3 = document.querySelector(".table-3");

const button3 = document.querySelector('.button-3')
button3.addEventListener('click', clickHandler)

function clickHandler() {
    addRow3(tbody3)   
}

//-------- :

// document.querySelectorAll('#table1').forEach((cell) => {
//     cell.addEventListener('input', (e) => {
//         updateCell(e.target);
//     });
// }) ;


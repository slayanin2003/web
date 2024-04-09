let secretNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;

alert("Игра 'Угадай число'! Отгадай число от 1 до 10 за 5 попыток!");

while (tries < 5) {

  let answer = prompt("Угадай число! Осталось попыток: " + (5 - tries) );
  
  const parsedAnswer = parseInt(answer);
  if(isNaN(parsedAnswer) || parsedAnswer < 1 || parsedAnswer > 10){
    alert('Введите корректное число от 1 до 10');
    continue;
  }

  if (parsedAnswer === secretNumber) {
    alert("Поздравляю! Ты угадал число за " + tries + " попыток");
    break;
  } 
  else if (parsedAnswer < secretNumber) {
    alert("Загаданное число больше!");
  } 
  else {
    alert("Загаданное число меньше");
  }

  tries++;
}

if (tries === 5) {
    alert("Конец игры. Загаданное число было: " + secretNumber);
}


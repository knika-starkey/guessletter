let word = "луна";

let answer = []; // что открыто
answer[0] = word[0]; // первая буква будет открыта
answer[word.length - 1] = word[word.length - 1]; // последняя буква будет открыта

function show() {
  for (let i = 0; i <= word.length - 1; i++) {
    if (answer[i] == null) answer[i] = "_";
    let answ = document.getElementById("answ");
    answ.innerHTML = answer.join(" ");
  }
}
show();

let remain = word.length - 2;
let guess = "";
function tryguess() {
  if (JSON.stringify(word.split("")) == JSON.stringify(answer)) {
    alert("Ты победил!!");
  } else if (remain == 0) {
    alert("Ты потратил все попытки");
  } else {
    guess = prompt("Какая буква?");
    for (let i = 0; i < word.length; i++) {
      // проходим строку word поэлементно, как массив
      if (word[i] == guess) {
        // если буква строки совпала с угаданной
        answer[i] = guess; // записываем ее в массив открытых букв
        remain--; // уменьшаем на 1 количество оставшихся попыток
      }
      //else alert("НЕ верно");
      //   return;
    }
  }
  show();
}

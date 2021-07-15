'use strict';

let time = document.querySelector('.player1');
let color1 = document.querySelector('.player2');
let font = document.querySelector('.player1 .name');
let font1 = document.querySelector('.player2 .name');
let opacity = document.querySelector('.player1 .current');
let opacity1 = document.querySelector('.player2 .current');

let a = document.querySelector('.player1 .current-score');
let b = document.querySelector('.player2 .current-score');
let c = document.querySelector('.player1 .final');
let d = document.querySelector('.player2 .final');

let playing, randomNum;

function init() {
  a.textContent = 0;
  b.textContent = 0;
  c.textContent = 0;
  d.textContent = 0;
  playing = true;

  dice.classList.add('hidden');
  time.classList.add('time');
  time.classList.add('player--active');
  color1.classList.remove('player--active');
  font.classList.add('font');
  font1.classList.remove('font');
  opacity.classList.remove('current--opacity');
  opacity1.classList.add('current--opacity');
  time.classList.remove('winner');
  color1.classList.remove('winner');
  font.classList.remove('winner-color');
  font1.classList.remove('winner-color');
}

init();

function change() {
  time.classList.toggle('time');
  time.classList.toggle('player--active');
  color1.classList.toggle('player--active');
  font.classList.toggle('font');
  font1.classList.toggle('font');
  opacity.classList.toggle('current--opacity');
  opacity1.classList.toggle('current--opacity');
}

function finalScore(ele, final, p) {
  final.textContent = Number(final.textContent) + Number(ele.textContent);
  ele.textContent = 0;
  if (final.textContent >= 100) {
    document.querySelector(`.player${p}`).classList.add('winner');
    document.querySelector(`.player${p} .name`).classList.add('winner-color');
    dice.classList.add('hidden');
    playing = false;
  }
}

function roll() {
  if (playing) {
    randomNum = Math.trunc(Math.random() * 6) + 1;
    document.dice.src = `dice-${randomNum}.png`;
    dice.classList.remove('hidden');

    function add(ele) {
      if (randomNum == 1) {
        ele.textContent = 0;
        change();
      } else {
        ele.textContent = Number(ele.textContent) + randomNum;
      }
    }

    time.classList.contains('time') ? add(a) : add(b);
  }
}

function hold() {
  if (playing) {
    if (randomNum == 1) {
      return;
    } else {
      if (a.textContent != 0) {
        finalScore(a, c, 1);
        change();
      } else if (b.textContent != 0) {
        finalScore(b, d, 2);
        change();
      } else {
        return;
      }
    }
  }
}

function new1() {
  init();
}

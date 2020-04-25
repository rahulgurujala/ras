let fInpt = document.getElementById('fInput');
let sInpt = document.getElementById('sInput');
let tInpt = document.getElementById('tInput');
let subBtn = document.getElementById('subBtn');
let answer = document.getElementById('ans');
let clearBtn = document.getElementById('cls');
let ans;

function clear(e) {
  e.preventDefault();
  fInpt.value = '';
  sInpt.value = '';
  tInpt.value = '';
  answer.style.display = 'none';
}

function calculate(e) {
  e.preventDefault();
  a = Number(fInpt.value);
  b = Number(sInpt.value);
  c = Number(tInpt.value);
  ans = `${(a * b)}${(a * c)}${a * (b + c) - b}`;
  console.log(ans);
  answer.style.display = 'block';
  answer.innerText = `${a} + ${b} + ${c} = ${ans}`;
}

subBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clear);
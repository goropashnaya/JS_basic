'use strict';

// let c = prompt('Введите температуру в Цельсиях');
// alert((9 / 5) * c + 32);

// let name = 'Василий';
// let admin = name;
// alert(admin);

// №1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - префиксная форма возвращает значение увеличенное на 1
d = b++; alert(d);           // 1 - постфиксная форма возвращает первоначальное значение
c = (2+ ++a); alert(c);      // 5 - с=(2+(2+1))
d = (2+ b++); alert(d);      // 4 - d=(2+(1+1))
alert(a);                    // 3 - a=1+1+1 (увеличение а в примерах с с)
alert(b);                    // 3 - b=1+1+1 (увеличение b в примерах с d)

// №2
var a = 2;
var x = 1 + (a *= 2); 
// x=5
// a *= 2 - a=a*2 - x=1+(2*2)=5

// №3
let a = 36;
let b = 9;

if (a >= 0 && b >= 0) {
	console.log(a - b);
} else if (a < 0 && b < 0) {
	console.log(a * b);
} else {
	console.log(a + b);
}

// №4 
let a = 10;

switch (a) {
  case 1:
  	console.log(1);
  case 2:
  	console.log(2);
  case 3:
  	console.log(3);
  case 4:
  	console.log(4);
  case 5:
  	console.log(5);
  case 6:
  	console.log(6);
  case 7:
  	console.log(7);
  case 8:
  	console.log(8);
  case 9:
  	console.log(9);
  case 10:
  	console.log(10);
  case 11:
  	console.log(11);
  case 12:
  	console.log(12);
  case 13:
  	console.log(13);
  case 14:
  	console.log(14);
  case 15:
  	console.log(15);
  break;
}

// №5
function addition(a, b) {
	return a + b;
}

function substraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function devision(a, b) {
	return a / b;
}

console.log(addition(4, 7));
console.log(substraction(10, 3));
console.log(multiplication(8, 5));
console.log(devision(9, 1));

// №6
function mathOperation (a, b, operation) {
	switch(operation){
  	case 'plus':
    return addition(a, b);
    case 'minus':
    return substraction(a, b);
    case 'times':
    return multiplication(a, b);
    case 'devide':
    return devision(a, b);
  }
}

console.log(mathOperation(4, 5, 'plus'));
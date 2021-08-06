'use strict';

if (!("a" in window)) {
    var a = 1;
}
alert(a); // undefined, т.к. a не существует в window

var b = function a(x) {
    x && a(--x);
};
alert(a); // выдаст ошибку, т.к. не объявлена a

function a(x) {
    return x * 2;
}
var a;
alert(a); // выдаст тело функции,т.к. не было присвоено значение

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // выдаст 10, т.к. внутри функции а было присвоено значение 10

function a() {
    alert(this);
}
a.call(null); // [object Window], this == window, null также == window

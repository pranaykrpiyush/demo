var viewer = document.getElementById('viewer');
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var clear = document.getElementById('clear');
var deci = document.getElementById('deci');
var add = document.getElementById('add');
var sub = document.getElementById('sub');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equal = document.getElementById('equal');
var op1 = null;
var op0 = null;
var operator = null;
clear.addEventListener('click', function() {
    op1 = null;
    op0 = null;
    operator = null;
    viewer.innerText = null;
});
deci.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '.';
});

one.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '1';
    op1 = viewer.innerText;
});

zero.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '0';
    op1 = viewer.innerText;
});

nine.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '9';
    op1 = viewer.innerText;
});

eight.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '8';
    op1 = viewer.innerText;
});

seven.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '7';
    op1 = viewer.innerText;
});

six.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '6';
    op1 = viewer.innerText;
});

five.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '5';
    op1 = viewer.innerText;
});

four.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '4';
    op1 = viewer.innerText;
});

three.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '3';
    op1 = viewer.innerText;
});

two.addEventListener('click', function() {
    op1 = viewer.innerText;
    viewer.innerText = op1 + '2';
    op1 = viewer.innerText;
});

add.addEventListener('click', function() {
    operator = "+";
    op0 = op1;
    op1 = null;
    viewer.innerText = null;
});

sub.addEventListener('click', function() {
    operator = "-";
    op0 = op1;
    op1 = null;
    viewer.innerText = null;
});

multiply.addEventListener('click', function() {
    operator = "*";
    op0 = op1;
    op1 = null;
    viewer.innerText = null;
});

divide.addEventListener('click', function() {
    operator = "/";
    op0 = op1;
    op1 = null;
    viewer.innerText = null;
});

equal.addEventListener('click', function() {
    var g = op1;
    var answer = eval(op0 + " " + operator + " " + g);
    console.log(answer);
    viewer.innerText = answer;
    op0 = null;
    op1 = null;
    operator = null;
});
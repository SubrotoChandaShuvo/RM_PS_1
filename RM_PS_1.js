
var solveMeFirst = function(a, b) {
    return a + b;
};

var multiply = function(a, b) {
    return a * b;
};

var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

var makeNegative = function(number) {
    return number > 0 ? -number : number;
};

var opposite = function(number) {
    return -number;
};

var simpleArraySum = function(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
};

var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};

var diff21 = function(n) {
    var diff = Math.abs(n - 21);

    if (n > 21) {
        return diff * 2;
    }

    return diff;
};

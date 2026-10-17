var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

var nearHundred = function(n) {
    return (n >= 90 && n <= 110) || (n >= 190 && n <= 210);
};
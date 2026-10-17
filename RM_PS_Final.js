var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};
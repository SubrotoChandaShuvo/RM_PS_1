var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

var nearHundred = function(n) {
    return (n >= 90 && n <= 110) || (n >= 190 && n <= 210);
};

var posNeg = function(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }
    return (a < 0 && b > 0) || (a > 0 && b < 0);
};

var notString = function(str) {
    if (str.startsWith("not")) {
        return str;
    }
    return "not " + str;
};


var compareTriplets = function(a, b) {
    let person_a = 0;
    let person_b = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            person_a++;
        } else if (a[i] < b[i]) {
            person_b++;
        }
    }

    return [alice, bob];
};
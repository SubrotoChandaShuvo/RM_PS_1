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


var aVeryBigSum = function(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    return sum;
};



var staircase = function(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let j = 0; j < n - i; j++) {
            line += " ";
        }

        for (let k = 0; k < i; k++) {
            line += "#";
        }

        result += line + (i < n ? "\n" : "");
    }

    return result;
};

var gradingStudents = function(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }

        let next = Math.ceil(grade / 5) * 5;

        if (next - grade < 3) {
            return next;
        }

        return grade;
    });
};
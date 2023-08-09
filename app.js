// a+b, a-b, a/b, a**b 기능

const calculator = {
    add: function(a, b) {
        console.log(a+b);
    },
    min: function(a, b) {
        console.log(a-b);
    },
    div: function(a, b) {
        console.log(a/b);
    },
    squ: function(a, b) {
        console.log(a**b);
    },
};

calculator.add(54, 16);
calculator.min(64, 23);
calculator.div(53, 12);
calculator.squ(4, 8);
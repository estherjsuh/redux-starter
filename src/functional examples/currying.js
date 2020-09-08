//Currying takes functions with multiple parameters, and converts parameters to 1

function add(a){
    return function(b){
        return a + b;
    };
}

const add2 = a => b => a + b; // (a,b) => a+b
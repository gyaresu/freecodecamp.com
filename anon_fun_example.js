function multiply(x){
    console.log(x);
    return function(y){
        console.log(x,y);
        return x*y;
    };
}

console.log(multiply(2)(3)); // => 2


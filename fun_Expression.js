// create a fun inside a variable called sayHi and print"Hi Bro"
let sayHi= function(){
    console.log("hii bro")
};
sayHi()

// create a function expression to multiply two numbers.
let mul=function(a,b){
    return a*b;
}
console.log(mul(2,5))

// check if a no is positive or negetive
let checkNumber= function(num){
    if(num>0){
        console.log(num + " is positive no")
    }else if (num<0){
        console.log(num + " is negetive no")
    }else{
        console.log("zero")
    }
}
checkNumber(5);
checkNumber(-2);

// return the lenth of a string,

let getlenth=function(str){
    return str.lenth;

}
console.log(getlenth("hello"));
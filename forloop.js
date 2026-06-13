// print no from 1 to 10.
for (let i=1;i<11;i++){
    console.log(i)
}

// print all even no from 1 to 20.
for(let i=1;i<=20;i++){
    if ( i%2===0){
        console.log(i)
    }
}

// print the multiplication table of 5
for (let i=1;i<10;i++){
    console.log("5 * "+ i + "=" +(5*i));
    
}
// reverse print number from 10 to 1
for(let i=10; i>=1;i--){
    console.log(i)
}

// find the sum from 1 to 100
let sum =0;
for (let i=1;i<=100;i++){
    sum+=i
}
console.log(sum);
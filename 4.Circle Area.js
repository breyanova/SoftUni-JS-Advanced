function solve(input){
    let isNumber = typeof(input);
    if(isNumber == `number`){
        let result = (Math.pow(input,2) * Math.PI).toFixed(2);
        console.log(result);

    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${isNumber}.`);
    }
    
}
solve(5);
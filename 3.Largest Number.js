function solve(num1,num2,num3){
    let isBiggest;

    if(num1 > num2){
        if(num1 > num3){
            isBiggest = num1;
        }
        else{
            isBiggest = num3;
        }
    }
    else{
        if(num2 > num3){
            isBiggest = num2;
        }
        else{
            isBiggest = num3;
        }
    }
    
    console.log(`The largest number is ${isBiggest}.`);
}
solve(-3, -5, -22.5);
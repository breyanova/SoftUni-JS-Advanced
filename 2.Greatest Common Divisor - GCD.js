function solve(firstNumber,secondNumber){

    while(firstNumber !== secondNumber){
        if(firstNumber > secondNumber){
            firstNumber -= secondNumber;
        }
        else{
            secondNumber -= firstNumber;
        }
    }
    console.log(firstNumber);

}
solve(2154, 458);
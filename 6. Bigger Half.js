function solve(array) {
    array.sort((a,b) => a - b);
    let num;
    if(array.length % 2 == 0){
        num = array.length / 2;
        

    }
    else{
        num = (array.length / 2) + 0.5;

    }
    while(array.length !== num){
        array.shift();
    }
    return array;
}
solve([4, 7, 2, 5] );
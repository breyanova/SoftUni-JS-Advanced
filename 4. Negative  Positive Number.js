function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] < 0){
            result.unshift(array[i]);
        }
        else{
            result.push(array[i]);
        }
        
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
        
    }
    
}
solve([7, -2, 8, 9] );
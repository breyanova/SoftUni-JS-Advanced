function solve(n , k) {
    let array = [];
    if(n == 1){
        array = [1];
    }
    else{
        array = [1, 1];
    }
    
    

    for (let i = 2; i < n; i++) {
        let nextNum = 0;
        if(array.length > k){

            for (let j = array.length - 1; j > (array.length - 1) - k; j--) {
                nextNum += array[j];
                
            }

        }
        else{
        for (let j = 0; j < array.length; j++) {
            nextNum += array[j];
            
        }
    }
    array.push(nextNum);
        
    }
    return array;
    
}
solve(8, 2  );
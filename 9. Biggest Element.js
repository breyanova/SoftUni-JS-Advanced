function solve(matrix) {
    let myArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let matrixArr = matrix[i];

        for (let j = 0; j <matrixArr.length; j++) {
            myArr.push(matrixArr[j]);
            
            
        }
        
    }

    myArr.sort((a,b) => a - b);

    return myArr[myArr.length - 1];
    
}
solve([[20, 50, 10],

    [8, 33, 145]]);
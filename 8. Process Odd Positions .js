function solve(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if( i % 2 !== 0){
          newArr.push(Number(array[i] * 2));
        }
        
    }

    newArr.reverse();
    console.log(newArr.join(" "));
    
}
solve([10, 15, 20, 25]);
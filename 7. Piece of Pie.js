function solve(array, beginElement, lastElement) {

    let begin = array.indexOf(beginElement);
    let last = array.indexOf(lastElement);
   // let deleteCount = (array.length - 1) - last;

   // array.splice(0, begin);
   // array.splice(last, deleteCount);

   for (let i = 0; i < array.length; i++) {
    if(i < begin){
        array.shift();
    }
    else{
        break;
    }
    
   }
   let newArr = [];

   for (let i = 0; i < array.length; i++) {
    if(i > last){
        break;
    }
    else{
        newArr.push(array[i]);
    }
    
   }

    return newArr;
    
}
solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie' );
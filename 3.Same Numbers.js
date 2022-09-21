function solve(input) {
    let inputString = String(input);
    let first = inputString[0];
    let isSame = true;
    let sum = Number(first);

    for (let i = 1; i < inputString.length; i++) {
        sum += Number(inputString[i]);

        if (inputString[i] !== first) {
            isSame = false;


        }

    }


    console.log(isSame);
    console.log(sum);
}
solve(222222);
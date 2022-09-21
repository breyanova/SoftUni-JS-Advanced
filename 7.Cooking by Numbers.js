function solve(a, b, c, d, e, f) {
    let number = Number(a);
    let array = [b, c, d, e, f];

    for (let i = 0; i < array.length; i++) {
        let nextCommand = array[i];

        switch (nextCommand) {
            case 'chop':
                number = number / 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= number * 0.2;
                console.log(number);
                break;

        }

    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
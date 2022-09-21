function solve(fruitType, grams, priceKilo){
    let kilo = grams / 1000;
    
    console.log(`I need $${(kilo * priceKilo).toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruitType}.`);
  
    
}

solve('orange', 2500, 1.80);
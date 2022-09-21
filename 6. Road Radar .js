function solve(driverSpeed, area) {
    let limit;
    function speedOver(driverSpeed, limit){
        let status;
        let difference = driverSpeed - limit;
        if(difference <= 20){
            status = "speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
        else if(difference > 20 && difference <=40){
            status = "excessive speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
        else{
            status = "reckless driving";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }



    switch (area) {
        case "motorway":
            limit = 130; 
            if(driverSpeed <= limit){
                console.log(`Driving ${driverSpeed} km/h in a ${limit} zone`);
            }
            else{
                speedOver(driverSpeed, limit);
            }
            break;

        case "interstate":
            limit = 90; 
            if(driverSpeed <= limit){
                console.log(`Driving ${driverSpeed} km/h in a ${limit} zone`);
            }
            else{
                speedOver(driverSpeed, limit);
            }
            break;
        case "city":
            limit = 50; 
            if(driverSpeed <= limit){
                console.log(`Driving ${driverSpeed} km/h in a ${limit} zone`);
            }
            else{
                speedOver(driverSpeed, limit);
            }
            break;
        case "residential":
            limit = 20; 
            if(driverSpeed <= limit){
                console.log(`Driving ${driverSpeed} km/h in a ${limit} zone`);
            }
            else{
                speedOver(driverSpeed, limit);
            }
            break;
    }


}
solve(21, 'residential' );
function solve(steps,length,speed){
    //•	The first is the number of steps the student takes from their home to the university
/////•	Тhe second number is the length of the student's footprint in meters
//	Тhe third number is the student speed in km/h
//Every 500 meters the student rests and takes a 1-minute break.

let distance = steps * length;
let speedS = speed * 1000 / 3600;
let rest  = Math.floor(distance / 500) * 60;
let time = (distance / speedS) + rest;

let hours = String(Math.floor(time / 3600)).padStart(2 , '0');
let minutes = String(Math.floor(time / 60)).padStart(2 , '0');
let seconds = String(Math.ceil(time % 60)).padStart(2 , '0');

console.log(`${hours}:${minutes}:${seconds}`);
}
solve(4000, 0.60, 5);
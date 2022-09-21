function solve(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);

    date.setDate(date.getDate() - 1);
    let yearNow = date.getFullYear();
    let monthNow = date.getMonth() + 1;
    let daysNow = date.getDate();
    console.log(`${yearNow}-${monthNow}-${daysNow}`);

}
solve(2016, 9, 30);
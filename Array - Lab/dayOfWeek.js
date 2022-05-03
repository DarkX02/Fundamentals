function dayOfWeek(num) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if(num<1 || num>7){
        console.log('Invalid day!');
    }else{
        let day = arr[num-1]
        console.log(day);
    }
}
dayOfWeek(100)
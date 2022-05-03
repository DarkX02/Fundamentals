function meetings(arr) {
    let meetings = {}
    for (let line of arr) {
        let [day, name] = line.split(' ')
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = name
        }
    }
    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
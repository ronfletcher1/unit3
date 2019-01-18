let students = ['Brandon', 'Khanh', 'Connor', 'Cody', ]







// keep looping, as long as there is still a student
// in original students array
while(students.length > 0){
    // get tandom index - bounds between
    // 0 and students.length
    for(let i = 0; i < 4; i++){
        const rand = Math.floor(Math.random()*students.length);
        const student = students.splice(rand, 1);
        newStudents[i].push(student);
    }
}
console.log(newStudents)
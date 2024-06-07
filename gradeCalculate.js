let gradeMap = new Map();

gradeMap.set('Manu',{math:90,science:95});
gradeMap.set('Rahul',{math:92,science:90});
gradeMap.set('Sujin',{math:89,science:92});

function calculateAvg(map){
    let averages = new Map();
    for(let [student,grades] of map){
        let total=0;
        let sbj = 0;
        for(let subject in grades){
                total+=grades[subject];
                sbj++;   
        }
        console.log('total:',total)
        averages.set(student,total/sbj);
    }
    console.log(averages)
    return averages;
    

}
// calculateAvg(gradeMap);

let averageGrades = calculateAvg(gradeMap);

for(let [student,averages] of averageGrades){
    console.log(`${student}:${averages}`);
}
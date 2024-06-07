let newMap = new Map([['color','blue'],['size','large'],['shape','circle']]);

console.log('**iterating using for of loop**')

for(let [key,value] of newMap){
    console.log(`${key}:${value}`);
}
 
console.log('****using forEach****');

newMap.forEach((value,key)=>{
    console.log(`${key}:${value}`)
})

console.log('*********')

let mapArray = Array.from(newMap);
console.log(mapArray)
// mapArray.forEach((value,key)=>{
//     console.log(`${key}:${value}`)
// })



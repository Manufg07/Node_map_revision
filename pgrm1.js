let exampleMap = new Map();

exampleMap.set('name','Manu');
exampleMap.set('age','23');

console.log(exampleMap.get('name'));
console.log(exampleMap.get('age'));

console.log(exampleMap.has('name'));
console.log(exampleMap.has('address')); //false

exampleMap.delete('age');
console.log(exampleMap.has('age')); //false

console.log(exampleMap.size);

exampleMap.set('age','23');
exampleMap.set('address','Kasaragod')
console.log(exampleMap.size);

exampleMap.forEach((value,key)=>{
    console.log(`${key}:${value}`);
});

// exampleMap.forEach(function(value,key){
//     console.log(`${key}:${value}`);
// });


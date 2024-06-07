let itemMap = new Map();

// itemMap.set(1,'item1');
// itemMap.set(2,'item2');
// itemMap.set(3,'item3');
// itemMap.set(4,'item4');

function displayItem(map){
    let itemList = document.getElementById('itemlist');
    itemList.innerHTML ='';//clear existing item
    map.forEach((value,key) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${key}:${value}`;
        itemList.appendChild(listItem);
    });
}

function addItem(key,value){
    itemMap.set(key,value);
    displayItem(itemMap)
}
//handle form submission
document.getElementById('addItem').addEventListener('submit',(e)=>{
    e.preventDefault();
    let key  = document.getElementById('itemkey').value;
    let value = document.getElementById('itemvalue').value;
    addItem(key,value);
    document.getElementById('addItem').reset();
});

// display on page loading

window.onload= () =>{
    displayItem(itemMap);
}
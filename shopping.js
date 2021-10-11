const shoppingList = [
    {
        id: 1,
        name: "Milk",
        quantityNeeded: 1,
        price: 2.50,
    },
    {
        id: 2,
        name: "Oreos",
        quantityNeeded: 1,
        price: 4.50,
    },
    {
        id: 3,
        name: "Garlic",
        quantityNeeded: 1,
        price: .99,
    },
    {
        id: 4,
        name: "Sweet Potatos",
        quantityNeeded: 4,
        price: 3.50,
    },
    {
        id: 5,
        name: "Steak",
        quantityNeeded: 2,
        price: 25.00,
    },
    {
        id: 6,
        name: "Beer",
        quantityNeeded: 12,
        price: 20.00,
    },
]

const popcorn = {
    name: "Popcorn",
    quantityNeeded: 1,
    price: 2.00,
}

const addToShoppinglist = (listObject) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    listObject.id = idForNewItem // listObject.id we can use id because its in the object already
    listObject.date = new Date() // here we are creating a new key and giving it thevalue of new Date()
    shoppingList.push(listObject)
}
// 
addToShoppinglist(popcorn)
console.log(shoppingList)

// for (const itemObj of shoppingList) {
//     if (itemObj.price >= 8) {
//     console.log(`${itemObj.name} is unaffordable.`)    
//     } else {
//        console.log(`${itemObj.name} is affordable.`) 
//     }
// }

const squadre =[
    'Brescia',
    'Atalanta',
    'Roma',
    'Napoli',
    'Milan',
    'Torino',
    'Salernitana',
    'Verona',
]

function filterArray (min, max, array){
    const newArray = [];
    for(let i=0; i<array.length; i++){
        if(i>= min && i<= max){
            newArray.push(array[i])
        }
    }


    return newArray
}

console.log(filterArray(0,1,squadre));

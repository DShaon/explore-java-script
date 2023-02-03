/* 
1. chair --> 3cft
2.table --> 10cft (cubic feet)
2.bed--> 50cft
*/

function woodCalculator(chair, table, bed) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    var chairWoodQuantity = chair * chairWood;
    var tableWoodQuantity = table * tableWood;
    var bedWoodQuantity = bed * bedWood;
    var totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}



const woodQuantity = woodCalculator(0, 0, 1);
console.log(woodQuantity);  
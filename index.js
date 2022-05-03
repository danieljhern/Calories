
var Food = function(pFood, pCalories) {
    this.food = pFood;
    this.calories = parseInt(pCalories);
};

FoodArray = []; 




document.addEventListener("DOMContentLoaded", function (event) {

});

function formSubmitEvent() {
    let tFood = document.getElementById("foodItem").value;
    let tCalories = document.getElementById("foodCalories").value;
    FoodArray.push( new Food(tFood, tCalories));
    let total = 0
    
    FoodArray.forEach(item =>{
        total += parseInt(item.calories)
    }      
    
    )

    console.log(FoodArray)

  
    document.getElementById("foodItem").value = "";
    document.getElementById("foodCalories").value = "";
    document.getElementById("totalCalories").value = total

}



let condiments = 0
let totalCondiments = document.getElementById('totalCondiments')
function addCondiments() {
    if (points >= 20)
    {
        points = points - 20
        condiments++
        totalCondiments.innerText = condiments + " Condiments"
        pointsTracker.innerText = points + " Burgers Built"
    }
    else {
        alert("You dont have enough burgers built!")
    }
}


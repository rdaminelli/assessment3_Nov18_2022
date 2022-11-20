document.getElementById('random').addEventListener('click', randomRestaurant);

function randomRestaurant () {
    let restaurantArr = ['Masa', 'Patra', 'Mohawk Bend', 'Guisados']
    let num = Math.floor(Math.random()*4)
    let restaurantChoice = restaurantArr[num];
    alert(`Maybe you should go to ${restaurantChoice}.`);
}
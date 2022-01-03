//Adding all the needed divs with numbered IDs and class name = square

for(x=0; x<=15;x++) {
    var squareDiv = document.createElement('div');
    squareDiv.id += x;
    squareDiv.className = "square"

    document.getElementById('container').appendChild(squareDiv);
}



let squares = document.querySelectorAll("div.square");

console.log(squares)

squares.forEach(function(elem){
    elem.addEventListener("mouseover", function(){
        elem.style.backgroundColor = "orange";
    })
})
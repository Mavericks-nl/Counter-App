//simplest way of writing the code

// let countResult = document.getElementById("output");
// let count = 0;

//  sub = () => {
//     count --;
//     countResult.innerHTML = count;  
//     setColor() ;
// }
//  res = () => {
//     count = 0;
//     countResult.innerHTML = count;
//     setColor()
// }
//  adds = () => {
//     count ++;
//     countResult.innerHTML = count;
//     setColor();
// }



//writing with event delegation

const countResult = document.querySelector("#output");
const button = document.querySelector(".buttons");

button.addEventListener("click", (event) => {
    if (event.target.classList.contains("add")){
        countResult.innerHTML++;
        setColor();
    }
    
    if (event.target.classList.contains("subtract")){
        countResult.innerHTML--;
        setColor();
    }
    
    if (event.target.classList.contains("reset")){
        countResult.innerHTML = 0;
        setColor();
    }
});




setColor = () => {
    if (countResult.innerHTML < 0) {
        countResult.style.color = "orangered";
      }
    else if (countResult.innerHTML > 0) {
        countResult.style.color = "green";
      }
    else {
        countResult.style.color = "white";
    }
}






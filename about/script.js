let number = document.getElementById("number")
let number2 = document.getElementById("number2")
let number3 = document.getElementById("number3")
let counter = 0;

setInterval(()=>{
    if (counter == 100){
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
        number2.innerHTML = counter + "%";
        number3.innerHTML = counter + "%";

    }
   
}, 19)



const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

centerItem.addEventListener("mouseover", ()=>{
    menu.classList.add("change");
})

menu.addEventListener("mouseleave", () =>{
    menu.classList.remove("change");
})

function redirectTo(page) {
    window.location.href = page;
}
function redirectToURL(url) {
    window.open(url, '_blank');
}

const heading = "Hello, I am Despina Vilcu";
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector(".heading").innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150)
    }
}

typing();

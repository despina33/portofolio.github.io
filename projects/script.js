const text = document.querySelector(".text")
const project = document.querySelector(".project")

function showText(textElement, projectElement) {
    textElement.style.opacity = "1";
    projectElement.style.background= "black"
  }
  
  function hideText(textElement, projectElement, backgroundImage) {
    textElement.style.opacity = "0";
    projectElement.style.background= backgroundImage;
  }

  function redirectToURL(url) {
    window.open(url, '_blank');
}
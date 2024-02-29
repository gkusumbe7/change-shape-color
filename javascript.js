let changeBackgroundColor = document.getElementById("change-color");
let bgChangeDiv = document.getElementById("mainDivColor");

changeBackgroundColor.addEventListener('click',function(){
      bgChangeDiv.style.backgroundColor =getRandomColor();
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  let changeShape = document.getElementById("change-shape");
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

//   let changeShape = document.getElementById("change-shape");

//   changeShape.addEventListener('click',function(){
//        let oldshape = document.getElementById('rectangle-shape');
//        let newShape = document.getElementById('triangle-shape');
//        oldshape.style.display='none';
//        newShape.style.display='block';
//   });

var isChanged = false;

let changeShape = document.getElementById("change-shape");

changeShape.addEventListener('click',function(){
    let oldshape = document.getElementById('rectangle-shape');
    let newShape = document.getElementById('triangle-shape');
    
    if(!isChanged){
    
        newShape.style.display='block';
        oldshape.style.display='none';
        isChanged=true;
    
    }else{
    
        newShape.style.display='none';
        oldshape.style.display='block';
        isChanged=false;
}
});


  
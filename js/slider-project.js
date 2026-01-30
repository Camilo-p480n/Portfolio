const slider=document.querySelector(".projects-slider");
const cards=document.querySelectorAll(".project-card");

let index=0;

document.querySelector(".right").onclick=()=>{
if(index<cards.length-1){
index++;
slider.style.transform=`translateX(-${index*320}px)`;
}
};

document.querySelector(".left").onclick=()=>{
if(index>0){
index--;
slider.style.transform=`translateX(-${index*320}px)`;
}
};

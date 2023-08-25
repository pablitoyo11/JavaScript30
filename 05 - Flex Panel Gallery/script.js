
//video solution didn't work 
//querySelectorAll is not usefull when "toggling" classes on nodelist items

const panels=document.querySelector(".panels");

panels.addEventListener("click", function(e){
  const target = e.target.closest(".panel");
  target.classList.toggle("open");
  
})
panels.addEventListener("transitionend", function(e){
  const target = e.target.closest(".panel");
  if (e.propertyName.includes('flex')){
  target.classList.toggle("open-active");}
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
  if (window.pageYOffset >603)
  {
    toTop.classList.add("active");
  }
  else
  {
    toTop.classList.remove("active");
  }
});




const bar=document.getElementById('bar');
const nav =document.getElementsByClassName('firstnav')
if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}
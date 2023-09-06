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
};




/*var indexValue = 1;
showImg(indexValue);
function side_slide(e){
  showImg(indexValue +=e);
}
function showImg(e){
  var i;
  const img = document.querySelectorAll('img');
  if(e>img.length)
  {
    indexValue = 1
  }
  if(e<1)
  {
    indexValue= img.length
  }
  for(i=0;i<img.length;i++)
  {
    img[i].style.display = "none";
  }
  img[indexValue-1].style.display = "block";
}*/
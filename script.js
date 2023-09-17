
//this will work only for single element 

//  var element = document.querySelector(".element");
//  var elementimg =  document.querySelector (".element img")

//  element.addEventListener("mousemove",function(dets){
//     elementimg.style.left = dets.x + "px";
//     elementimg.style.top = dets.y +"px";
//  })

//  element.addEventListener("mouseenter",function(dets){
//     elementimg.style.opacity = 1;
    
//  })

//  element.addEventListener("mouseleave",function(dets){
//     elementimg.style.opacity = 0;
    
//  })

//for all element

var element = document.querySelectorAll(".element");
// console.log(element);
element.forEach(function(val){
//   console.log(val.childNodes);

val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity = 1;
})
val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity = 0;
})
val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y +"px";
     })
    


})
console.log('Loadedr!');
var element=document.getElementById('madi');
function moveRight(){
    marginLeft=marginLeft+"10px";
    element.style.marginLeft=marginLeft+'px';
}
element.onclick=function(){
  var interval=setInterval(moveRight,100);
};

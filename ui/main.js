
var button=document.getElementById("counter");
button.onclick=function(){
  var request=new XMLHttpRequest(); 
  request.onreadystatechange=function(){
     if(request.readyState==XMLHttpRequest.DONE){
         if(request.status==200){
             var counter=request.responeText;
             var span=document.getElementById("count");
             span.innerHTML=counter.toString();
             
             
             
             }
     } 
  };
  request.open('Get','http://cloud.imad.hasura.io/counter',true);
  request.send(null);
  
};
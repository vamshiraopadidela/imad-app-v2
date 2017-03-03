
var button=document.getElementById("counter");
button.onclick=function(){
  var request= XMLHttp.Request(); 
  request.onreadystate=function(){
     if(request.readystate==XMLHttp.done){
         if(request.status==200){
             var counter=request.responetext;
             var span=document.getElementById("count");
             span.innerHTML=counter.toString();
             
             
             
             }
     } 
  };
  
};
var counter=0;
var button=document.getElementById("counter");
button.onclick=function(){
  var request=new XMLHttpRequest(); 
  request.onreadystatechange=function(){
     if(request.readyState==XMLHttpRequest.DONE){
         if(request.status==200){
              counter= request.responeText;
             var span=document.getElementById("count");
             span.innerHTML=counter.toString();
             
             
             
             }
     } 
  };
 // request.open('GET','http://vamshiraopadidela.imad.hasura-app.io/counter',true);
  request.send(null);
  
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('sub-btn');
submit.onclick=function(){
  var names=['name1','name2','name3'];
  var list='';
  for(var i=0;i<names.length;i++){
      list ='<li>'+ names[i] +'</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
};
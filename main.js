let c=0;
c=Number(c);
document.getElementById('number').textContent=c;
document.getElementById('increase').onclick=function(){
  c=c+1;
  document.getElementById('number').textContent=c;
}
 document.getElementById('reset').onclick=function(){
   c=0;
   document.getElementById('number').textContent=c;
}
 document.getElementById('decrease').onclick=function(){
   c=c-1;
   document.getElementById('number').textContent=c;
}
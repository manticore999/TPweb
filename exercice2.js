function main(){
    text=document.querySelector('h1');
    x=document.getElementById("color");
    n=document.getElementById("number");
    police=document.getElementById("police");
    x.addEventListener("input", function(){
        text.style.color=x.value;
    })
    n.addEventListener("input", function(){
        text.style.fontSize=n.value+"px";
    })
    police.addEventListener("input", function(){
        text.style.fontFamily=police.value;
    })






}
main();

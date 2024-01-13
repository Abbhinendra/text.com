let val=document.getElementById("val");
let filename=document.getElementById("filename");
let select=document.getElementById("select");
let btn=document.getElementById("btn");
let file=document.getElementById("file");
let div=document.createElement("div");
btn.addEventListener("click",function(){
let blob=new Blob([val.value],{type:select.value});
let url=URL.createObjectURL(blob);
let link=document.createElement("a");
link.href=url;
link.download=filename.value;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
link.remove();
})

val.addEventListener("input",()=>{
    if(val.value.trim()==""){
        btn.style.pointerEvents="none";
        btn.style.opacity=0.2;
    }
    else{
        btn.style.pointerEvents="auto";
        btn.style.opacity=1;
    }
})




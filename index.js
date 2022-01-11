let maxcount=100;
let smstypfun=()=>{
    let textentered =document.querySelector("#text-area").value.length;

    let spanTag=document.querySelector(".chars");
    let output=maxcount - textentered;
    spanTag.textContent=output;
};

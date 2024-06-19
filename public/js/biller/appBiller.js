
let $searchResult = document.getElementsByClassName("search-hide")[0];
let $nodeInput = document.getElementById("input-search")
let hideAndViewFlag = false;

async function llamada(){
    let response = await fetch("/biller")
    let responseJSON = await response.json()
    console.log(responseJSON)
    return alert("is ok")
}

function changeClass(newClass,$node){
    let newClassName = newClass.toString()
    if(typeof(newClassName) == "string"){ 
        $node.classList.toggle(newClassName)
    } 
}

function hideAndView(newClassName1,newClassName2,$nodeTarget,$nodeChangeClass,flagHideAndView,changeClass){
    flagHideAndView = false;

    document.addEventListener("focus", (e)=> {
        if(e.target.id == $nodeTarget){
            changeClass(newClassName2,$nodeChangeClass)
            flagHideAndView = false;
        }
        else if (e.target.id !== $nodeTarget){
            changeClass(newClassName1,$nodeChangeClass)
            flagHideAndView = true;
        }
    
    }) 
    
    document.addEventListener("click", (e)=> {
        if(e.target.id == $nodeTarget.id){
            changeClass(newClassName1,$nodeChangeClass)
            flagHideAndView = true;
            console.log("e.target.id -- aqui. -click")
        }
        else if (e.target.id !== $nodeTarget.id  ){
            console.log(e.target.id)
            changeClass(newClassName2,$nodeChangeClass)
            flagHideAndView = false;
        }
    
    }) 
    
    
    
    
    document.addEventListener("keydown", (e)=> {
        if(flagHideAndView == false && e.key == "F2"){
            changeClass(newClassName2,$nodeChangeClass)
            console.log("hideAndView == true && e.key == F2-- aqui. -keydown")
        }else if(e.key !== "F2" && flagHideAndView == true) {
            changeClass(newClassName1,$nodeChangeClass)
            console.log("e.key !== F2 -- aqui. -keydown")
        }
    }) 

    }

    //newClassName,$nodeTarget,$nodeChangeClass,flagHideAndView,changeClass
hideAndView("search-view","search-hide",$nodeInput,$searchResult,hideAndViewFlag,changeClass)

llamada();
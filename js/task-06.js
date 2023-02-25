
const inputEl = document.querySelector("input");

console.log(Number.parseInt(inputEl.dataset.length))


inputEl.addEventListener("blur", () => {

    if( inputEl.value.length === Number.parseInt(inputEl.dataset.length) ){ 
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")       
  
    }else {        
        inputEl.classList.add("invalid") 
        inputEl.classList.remove("valid")                  
    }
 
    console.log(inputEl.value.length)
})
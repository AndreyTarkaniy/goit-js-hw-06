
const inputEl = document.querySelector("input");

console.log(Number.parseInt(inputEl.dataset.length))


inputEl.addEventListener("blur", () => {

    if( inputEl.value.length === Number.parseInt(inputEl.dataset.length) ){ 
        inputEl.classList.add("valid")   
  
    }else {        
        inputEl.classList.add("invalid")            
    }
 
    console.log(inputEl.value.length)
})
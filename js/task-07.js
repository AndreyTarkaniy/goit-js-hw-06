





    const inputEl = document.querySelector("input"); 
    const textEl = document.querySelector("span"); 

    
    inputEl.addEventListener("input", () => {
       
        
        textEl.style.fontSize = `${inputEl.value}px` ;
        console.log(inputEl.value)
      
    })
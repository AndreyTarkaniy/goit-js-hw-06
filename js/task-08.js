
const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleFormElSubmint);

function handleFormElSubmint(event){
event.preventDefault();
const formElements = event.target;

if(formElements.email.value === "" || formElements.password.value === ""){

    alert("всі поля повинні бути заповнені");

} else {

    const email = formElements.elements.email.value;
    const password = formElements.elements.password.value;
    
    const formData = {email, password}
    formElements.reset();    
    
    console.log(formData)
}

}
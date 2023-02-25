
const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleFormElSubmint);

function handleFormElSubmint(event){
event.preventDefault();
const formElements = event.target;

if(formElements.email.value === "" || formElements.password.value === ""){

    alert("всі поля повинні бути заповнені");

} else {

    const Email = formElements.elements.email.value;
    const Password = formElements.elements.password.value;
    
    const formData = {Email, Password}
    formElements.reset();    
    
    console.log(formData)
}

}
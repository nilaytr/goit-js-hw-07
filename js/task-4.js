const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const login = event.target;
    const email = login.elements.email.value;
    const password = login.elements.password.value;
    
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    const formData = { email, password };
    console.log(formData);
    
    login.reset();
}

document.getElementById('verify-email').addEventListener('click', () => {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    const feedback = document.getElementById('verify-feedback');
    feedback.textContent = '';
    const h2 = document.createElement('h2');
    if(validateEmail(email)) {
        h2.classList.add('text-success');
        h2.innerText = `Your Email is Currect`
        feedback.appendChild(h2);
    }
    else {
        h2.classList.add('text-danger');
        h2.innerText = `Your Email is Incurrect`
        feedback.appendChild(h2);
    }


    // clear input value 
    emailInput.value = '';
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
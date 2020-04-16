window.onload = function() {

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });


    function checkInputs() {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const countryValue = country.value.trim();
        const cityValue = city.value.trim();
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        if (nameValue === '') {
            setErrorFor(name, 'Name cannot be blank');
        } else {
            setSuccessFor(name);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

        if (phoneValue === '') {
            setErrorFor(phone, 'Phone cannot be blank');
        } else {
            setSuccessFor(phone);
        }

        if (countryValue === '') {
            setErrorFor(country, 'Country cannot be blank');
        } else {
            setSuccessFor(country);
        }

        if (cityValue === '') {
            setErrorFor(city, 'City cannot be blank');
        } else {
            setSuccessFor(city);
        }

        if (usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else {
            setSuccessFor(username);
        }


        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }


        /*	if(password2Value === '') {
                setErrorFor(password2, 'Password2 cannot be blank');
            } else if(passwordValue !== password2Value) {
                setErrorFor(password2, 'Passwords does not match');
            } else{
                setSuccessFor(password2);
            }*/
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

}
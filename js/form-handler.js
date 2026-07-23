document.addEventListener('DOMContentLoaded', function() {
    const WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const payload = {
                formType: "contact",
                name: document.getElementById('c-name').value,
                email: document.getElementById('c-email').value,
                subject: document.getElementById('c-subject').value,
                message: document.getElementById('c-message').value
            };
            sendData(payload, contactForm);
        });
    }

    // Join Form Handler
    const joinForm = document.getElementById('join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const payload = {
                formType: "joining",
                name: document.getElementById('j-name').value,
                email: document.getElementById('j-email').value,
                role: document.getElementById('j-role').value,
                message: document.getElementById('j-message').value
            };
            sendData(payload, joinForm);
        });
    }

    function sendData(payload, formElement) {
        fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(() => {
            alert("Submitted successfully!");
            formElement.reset();
        }).catch(err => alert("Error submitting form."));
    }
});

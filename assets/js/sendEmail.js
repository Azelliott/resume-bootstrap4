function sendMail(contactForm) {
    emailjs.init("nS4nxz2OFMKUQZ5e9");
    var templateParams = {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value,
    };

    emailjs.send('service_9htuvvn', 'template_e0opvkn', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
};

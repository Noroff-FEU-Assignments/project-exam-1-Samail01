

//Code start for REGEX ON CONTACT PAGE
const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateName() {
    if (!nameRegex.test(nameInput.value)) {
      nameInput.setCustomValidity('Please enter a valid name');
    } else {
      nameInput.setCustomValidity('');
    }
  }

  function validateEmail() {
    if (!emailRegex.test(emailInput.value)) {
      emailInput.setCustomValidity('Please enter a valid email address');
    } else {
      emailInput.setCustomValidity('');
    }
  }

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (form.checkValidity()) {
      // Send form data to server
      alert('Form submitted successfully!');
      form.reset();
    } else {
      nameInput.reportValidity();
      emailInput.reportValidity();
      subjectInput.reportValidity();
      messageInput.reportValidity();
    }
  });
//Code END for REGEX ON CONTACT PAGE
/* function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phonenumber : document.getElementById("phonenumber").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_y63b0nk","template_islr8yl",parms).then(alert("Email Sent Successfully!"))
} */
function sendMail() {
  // Check if the form is valid
  if (!document.getElementById("contact-form").checkValidity()) {
      // If the form is invalid, it will not submit
      return false;
  }

  // Prepare parameters for sending email
  let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phonenumber: document.getElementById("phonenumber").value,
      message: document.getElementById("message").value,
  };

  // Send email
  emailjs.send("service_y63b0nk", "template_islr8yl", parms)
      .then(function () {
          alert("Email Sent Successfully!");
          // Reloads the page once form sumbitted
          location.reload();
      })
      .catch(function (error) {
          console.error("Email could not be sent:", error);
      });

  // Prevent default form submission
  return false;
}
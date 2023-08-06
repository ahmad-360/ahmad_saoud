(function () {
  emailjs.init("RCwzanBYEJtrLzILP");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_c7qve2o", "template_0vogc1b", {
      to_name: "Ahmad Saoud", // Your name or the name you want to appear as the recipient
      from_name: name,
      from_email: email,
      message: message,
  }).then(
      function (response) {
          console.log("Email sent successfully:", response);
          // Show a success message to the user
          alert("Email sent successfully!");
          // You can display a popup or update a div with a success message
      },
      function (error) {
          console.log("Email send error:", error);
          // Show an error message to the user
          alert("An error occurred while sending the email.");
      }
  );
});

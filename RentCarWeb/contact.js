// Function to handle form submission
function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    // Fetch form data
    const formData = new FormData(document.getElementById("contactForm"));
    const formDataJson = {};
    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    // Send POST request to JSON server
    fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataJson)
    })
    .then(response => {
        if (response.ok) {
            alert("Thanks for contacting us!");
            // Reset form after successful submission
            document.getElementById("contactForm").reset();
        } else {
            alert("Failed to submit form. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to submit form. Please try again.");
    });
}

// Add event listener to form submission
document.getElementById("contactForm").addEventListener("submit", handleSubmit);

// GSAP animations
gsap.from("article.contact__bg, .content h2, .content p, .input_box, .login_box,.box", {
    scrollTrigger: {
        trigger: "article.contact__bg",
        start: "top bottom",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

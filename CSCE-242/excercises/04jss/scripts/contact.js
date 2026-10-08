//https://web3forms.com/

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const result = document.getElementById("result");
    const formData = new FormData(form);

    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    result.innerHTML = "Sending your message...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Thank you! Your message has been sent.";
            form.reset();
        } else {
            result.innerHTML = "Error: " + data.message;
        }
    } catch (error) {
        result.innerHTML =
            "Something went wrong. Please try again.";
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
};
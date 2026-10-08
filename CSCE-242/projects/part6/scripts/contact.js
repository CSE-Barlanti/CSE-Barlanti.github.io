const form = document.getElementById("contact-form");
const submitBtn = form.querySelector('button[type="submit"]');
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    formData.append(
        "access_key",
        "4c8e02f5-9eff-4034-a0a0-427941419513"
    );

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
});
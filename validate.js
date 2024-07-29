document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function(event) {
        // Prevent form submission
        event.preventDefault();

        // Validate the form
        const petName = document.getElementById("petname").value.trim();
        const ownerName = document.getElementById("ownername").value.trim();
        const email = document.getElementById("email").value.trim();
        const ownerNumber = document.getElementById("ownernumber").value.trim();
        const clinic = document.getElementById("veterinaryclinic").value.trim();
        const day = document.getElementById("day").value;
        const time = document.getElementById("preferredtime").value;
        const caution = document.getElementById("caution").value;

        // Regex patterns
        const namePattern = /^[a-zA-Z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numberPattern = /^[0-9]{10}$/;

        // Validation checks
        if (!namePattern.test(petName)) {
            alert("Please enter a valid pet name.");
            return;
        }
        if (!namePattern.test(ownerName)) {
            alert("Please enter a valid owner name.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!numberPattern.test(ownerNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        if (clinic === "") {
            alert("Please enter a preferred veterinary clinic.");
            return;
        }
        if (!day) {
            alert("Please select a day.");
            return;
        }
        if (!time) {
            alert("Please select a preferred time.");
            return;
        }
        if (!caution) {
            alert("Please select a caution.");
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    });
});


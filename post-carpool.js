function submitCarpoolOffer() {
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const departureTime = document.getElementById("departure-time").value;
    const seatsAvailable = document.getElementById("seats-available").value;
    const price = document.getElementById("price").value;
    const additionalInfo = document.getElementById("additional-info").value;

    // File input for the image
    const carImage = document.getElementById("car-image").files[0];

    // Validation
    if (!departure || !destination || !departureTime || !seatsAvailable || !price || !carImage) {
        alert("Please fill out all required fields.");
        return;
    }

    if (seatsAvailable <= 0 || price <= 0) {
        alert("Seats and price must be greater than 0.");
        return;
    }

    // Display the submission details in a modal
    const successModal = document.getElementById("success-modal");
    const submittedData = document.getElementById("submitted-data");
    submittedData.innerHTML = `
        <p><strong>Departure Location:</strong> ${departure}</p>
        <p><strong>Destination Location:</strong> ${destination}</p>
        <p><strong>Departure Time:</strong> ${departureTime}</p>
        <p><strong>Seats Available:</strong> ${seatsAvailable}</p>
        <p><strong>Price per Seat:</strong> ${price}</p>
        <p><strong>Additional Information:</strong> ${additionalInfo}</p>
        <p><strong>Car Image:</strong> ${carImage.name}</p>
    `;

    successModal.style.display = "block";
}

function closeModal() {
    const successModal = document.getElementById("success-modal");
    successModal.style.display = "none";
}

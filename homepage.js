function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";
    } else {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";
    }
}

function zoomCard(card) {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".zoomed-card").style.display = "block";
   
}

function closeZoomedCard() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".zoomed-card").style.display = "none";
}

function showPaymentForm(button) {
    const card = button.parentElement;
    const paymentForm = document.querySelector(".payment-form");
    paymentForm.style.display = "block";
}

function processPayment() {
 
    alert("Payment processed successfully!");
    document.querySelector(".payment-form").style.display = "none";
}

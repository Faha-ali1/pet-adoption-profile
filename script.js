function filterPets(category) {
    let cards = document.getElementsByClassName("pet-card");

    for (let i = 0; i < cards.length; i++) {
        let petCategory = cards[i].getAttribute("data-category");

        if (category === "all" || petCategory === category) {
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function submitAdoptionForm(event) {
    event.preventDefault();

    let name = document.getElementById("applicantName").value;
    let pet = document.getElementById("petSelect").value;
    let box = document.getElementById("confirmationBox");

    alert("Thank you, " + name + "! Your application to adopt " + pet + " has been submitted.");

    box.style.display = "block";
    box.innerHTML = "Thank you, " + name + "! We have received your application for " + pet + ". Our shelter team will contact you soon.";

    document.getElementById("adoptionForm").reset();
}function filterPets(category) {
    let cards = document.getElementsByClassName("pet-card");

    for (let i = 0; i < cards.length; i++) {
        let petCategory = cards[i].getAttribute("data-category");

        if (category === "all" || petCategory === category) {
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function submitAdoptionForm(event) {
    event.preventDefault();

    let name = document.getElementById("applicantName").value;
    let pet = document.getElementById("petSelect").value;
    let box = document.getElementById("confirmationBox");

    alert("Thank you, " + name + "! Your application to adopt " + pet + " has been submitted.");

    box.style.display = "block";
    box.innerHTML = "Thank you, " + name + "! We have received your application for " + pet + ". Our shelter team will contact you soon.";

    document.getElementById("adoptionForm").reset();
}
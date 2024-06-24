document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var enteredName = document.getElementById('family-name').value.trim().toUpperCase();

    // Valid family member names
    var validNames = [
        "MUMMY RAHEEMAH",
        "DADDY JAMAL",
        "HASMOL",
        "UTHMAN",
        "USMAN",
        "BROTHER YAKUB",
        "BROTHER DEKUNLE",
        "BROTHER LEKAN",
        "AUNTY OPE",
        "MUMMY ZAINAB",
        "DADDY ZAINAB",
        "AUNTY RIKE",
        "GRANDMA",
        "GRANDPA",
        "AUNTY SEKEENAT",
        "AUNTY SEKINAT",
        "BROTHER DEKUNLE",
        "AUNTY BARAKAT",
        "ZAINAB",
        "MUMMY JAMAL",
        "MUMMY MUMEENAT",
        "AISHAT",
        "AUNTY UMMI",
        "AUNTY BABY",
        "AUNTY RAYYAH",
        "AUNTY MOM",
        "HAJIYA",
        "UMAYMA",
        "PRINCESS",
        "ICKY",
        "ABBA",
        "DADA",
        "SAYYED"
        // Add more names as needed
    ];

    // Check if entered name is valid
    if (!validNames.includes(enteredName)) {
        alert("Sorry, this message is only for family members. Please enter a valid name.");
        return;
    }

    var message = generateBirthdayMessage(enteredName);
    document.getElementById('message').innerHTML = message;
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('card').style.display = 'block';
});

function generateBirthdayMessage(name) {
    // Customize your birthday message here
    return `
        Dear ${name},

        On this special day, I want to express my deepest gratitude for having you as a part of my life.
        Your love, guidance, and unwavering support mean everything to me. From childhood memories to
        the present moments we share, each one is cherished because of you.
        <br><br>
        Thank you for being my pillar of strength and the heartbeat of our family.
        <br><br>
        With all my love and warm wishes,
        <br>
        Your Name
    `;
}


function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
}

document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var type = document.getElementById("type").value;
    var lieu = document.getElementById("lieu").value;
    var braqueurs = document.getElementById("braqueurs").value;
    var otages = document.getElementById("otages").value;
    var vehicules = document.getElementById("vehicules").value;
    
    generateText(type, lieu, braqueurs, otages, vehicules);
});

function generateText(type, lieu, braqueurs, otages, vehicules) {
    fetch('/generate-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: type,
            lieu: lieu,
            braqueurs: braqueurs,
            otages: otages,
            vehicules: vehicules,
        })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
}

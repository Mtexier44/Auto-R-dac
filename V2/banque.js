document.getElementById('submit').addEventListener('click', function() {
    const lieu = document.getElementById('lieu').value;
    const nombreBraqueurs = document.getElementById('nombreBraqueurs').value;
    const nomInculpe = document.getElementById('nomInculpe').value;
    const nombreOtages = document.getElementById('nombreOtages').value;
    const nombreVehicules = document.getElementById('nombreVehicules').value;
    const typeVehicule = document.getElementById('typeVehicule').value;
    const coursePoursuite = document.getElementById('coursePoursuite').checked;
    const ppa = document.getElementById('ppa').value;
    const carteIdentite = document.getElementById('carteIdentite').value;
    const permis = document.getElementById('permis').value;
    const droitSoins = document.getElementById('droitSoins').checked;
    const droitAvocat = document.getElementById('droitAvocat').checked;
    const droitMangerBoire = document.getElementById('droitMangerBoire').checked;
    const droitNonExercer = document.getElementById('droitNonExercer').checked;

    let infractionsList = document.getElementById('infractionsList');
    infractionsList.innerHTML = '';
    if (coursePoursuite) {
        const infractions = [
            "non-respect des distances de sécurité (1,5 m)",
            "franchissement d'une ligne continue",
            "non-res

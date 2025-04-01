function sortearTimes() {
    let input = document.getElementById("players").value;
    let players = input.split(",").map(p => p.trim()).filter(p => p);

    if (players.length < 12) {
        alert("É necessário pelo menos 12 jogadores para formar os times.");
        return;
    }

    // Embaralha os jogadores
    players.sort(() => Math.random() - 0.5);

    let team1 = players.slice(0, 6);
    let team2 = players.slice(6, 12);
    let extras = players.slice(12);

    document.getElementById("team1").innerHTML = team1.map(p => 
        `<li class="bg-blue-100 text-blue-900 rounded px-3 py-1 my-1">${p}</li>`).join("");

    document.getElementById("team2").innerHTML = team2.map(p => 
        `<li class="bg-green-100 text-green-900 rounded px-3 py-1 my-1">${p}</li>`).join("");

    if (extras.length > 0) {
        alert("Jogadores extras foram distribuídos alternadamente!");
        extras.forEach((player, index) => {
            let extraPlayer = `<li class="bg-yellow-100 text-yellow-900 rounded px-3 py-1 my-1">(Extra) ${player}</li>`;
            if (index % 2 === 0) {
                document.getElementById("team1").innerHTML += extraPlayer;
            } else {
                document.getElementById("team2").innerHTML += extraPlayer;
            }
        });
    }
}

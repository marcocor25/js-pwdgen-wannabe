// GENERATORE PASSWORD

alert ('Ciao! Se ti trovi qui vuol dire che hai bisogno di una passowrd efficace da utilizzare nei tuoi siti preferiti, giusto? eheheh Clicca "OK" per proseguire!')

const userName = prompt ('Anzitutto, come ti chiami?')

const userSurname = prompt ('E il tuo cognome?');

const userColor = prompt ('Qual è il tuo colore preferito?');

const userPassword = userName + userSurname + userColor + "21";

alert ('La tua password è pronta! Clicca "OK" per dare una sbirciatina (ma ricorati di non svelarla a nessuno... shhhh!')

document.getElementById("new_password").innerHTML += (userPassword);
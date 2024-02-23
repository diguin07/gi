var agora = new Date();

var hora = agora.getHours()

var tempo = "";

if(hora <= 12){
    tempo = 'Bom dia,o que pensa em comprar?';
}else if(hora <= 18){
    tempo = 'Boa tarde,o que pensa em comprar?';
}else {
    tempo = 'Boa noite,o que pensa em comprar?'
}

document.getElementById('saudacao').innerHTML = tempo;
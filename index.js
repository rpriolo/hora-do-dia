window.addEventListener('load', carregarEstilo);

function carregarEstilo() {
    var dataAtual = new Date(); // cria um objeto DATA
    var horas = dataAtual.getHours(); // retorna as HORAS ATUAIS
    // var horas = 25; // forçar uma hora para teste
    var minutos = dataAtual.getMinutes(); // retorna os MINUTOS ATUAIS
    
    if (minutos <= 9) { // O JS retorna minutos de 0 a 9 como '0' e não '00'. Esse trecho adiciona um zero no minutos em questão
        minutos = '0' + minutos;
    }
    var horarioCompleto = `${horas}:${minutos}`;
    
    var fundo = document.getElementById('div-body');
    var horario = document.getElementById('div-horario');
    var saudacao = document.getElementById('div-saudacao');
    var imagem = document.getElementById('imagem');
    
    if (horas >= 0 && horas <= 4) {
        fundo.style.background = '#181619';
        horario.innerHTML += `<p>Agora são <strong>${horarioCompleto}</strong>.</p>`;
        imagem.src = './img/madrugada.jpg';
        saudacao.innerHTML += `<p>Boa madrugada!</p>`;
    } else if (horas >= 5 && horas <= 11) {
        fundo.style.background = '#e9bd5b';
        horario.innerHTML += `<p>Agora são <strong>${horarioCompleto}</strong>.</p>`;
        imagem.src = './img/manha.jpg';
        saudacao.innerHTML += `<p>Bom dia!</p>`;
    } else if (horas >= 12 && horas <= 17) {
        fundo.style.background = '#c68c8c';
        horario.innerHTML += `<p>Agora são <strong>${horarioCompleto}</strong>.</p>`;
        imagem.src = './img/tarde.jpg';
        saudacao.innerHTML += `<p>Boa tarde!</p>`;
    } else if (horas >= 18 && horas <= 23) {
        fundo.style.background = '#293130';
        horario.innerHTML += `<p>Agora são <strong>${horarioCompleto}</strong>.</p>`;
        imagem.src = './img/noite.jpg'
        saudacao.innerHTML += `<p>Boa noite!</p>`;
    }
}
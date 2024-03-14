function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    if (nome === '' || dataNascimento === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos antes de continuar.');
        return false;
    }

    var urlDestino = "academico.html";
    window.location.href = urlDestino;

    return false;
}


function validFormulario() {
    var serie = document.getElementById("serie").value;

    if (serie === "") {
        alert("Por favor, selecione a série.");
        return false;
    }

    var turnos = document.getElementsByName("turno");
    var turnoSelecionado = false;

    for (var i = 0; i < turnos.length; i++) {
        if (turnos[i].checked) {
            turnoSelecionado = true;
            break;
        }
    }

    if (!turnoSelecionado) {
        alert("Por favor, selecione o turno preferencial.");
        return false;
    }
    var atividades = document.getElementsByName("atividades");
    var atividadeSelecionada = false;

    for (var i = 0; i < atividades.length; i++) {
        if (atividades[i].checked) {
            atividadeSelecionada = true;
            break;
        }
    }

    if (!atividadeSelecionada) {
        alert("Por favor, selecione pelo menos uma atividade extra-curricular.");
        return false;
    }

    window.location.href = "sucesso.html";
    return false;
}
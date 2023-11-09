function verificarRodizio() {
    var finalPlaca = parseInt(document.getElementById("finalPlaca").value, 10);
    var diaSemana = document.getElementById("diaSemana").value;
    var hora = parseInt(document.getElementById("hora").value, 10);

    var podeCircular = false;

    switch(diaSemana) {
        case "segunda":
            podeCircular = (finalPlaca == 1 || finalPlaca == 2) && (hora < 10 || hora >= 17);
            break;
        case "terca":
            podeCircular = (finalPlaca == 3 || finalPlaca == 4) && (hora < 10 || hora >= 17);
            break;
        case "quarta":
            podeCircular = (finalPlaca == 5 || finalPlaca == 6) && (hora < 10 || hora >= 17);
            break;
        case "quinta":
            podeCircular = (finalPlaca == 7 || finalPlaca == 8) && (hora < 10 || hora >= 17);
            break;
        case "sexta":
            podeCircular = (finalPlaca == 9 || finalPlaca == 0) && (hora < 10 || hora >= 17);
            break;
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "";

    if (podeCircular) {
        resultadoElement.textContent = "Veículo pode circular na área do Rodízio.";
    } else {
        resultadoElement.textContent = "Veículo não pode circular na área do Rodízio.";
    }
}

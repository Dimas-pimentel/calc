function calcular() {
    var valor1 = parseInt(document.getElementById('primeiro numero').value);
    var valor2 = parseInt(document.getElementById('segundo numero').value);
    var valor3 = parseInt(document.getElementById('terceiro numero').value);
    document.getElementById('resultado').value = parseInt((valor1 + valor2 + valor3) / 3);

}
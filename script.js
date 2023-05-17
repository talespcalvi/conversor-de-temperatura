function converterTemperatura() {
    var temperatura = document.getElementById("temperatura").value;
    var unidade = document.getElementById("unidade").value;
    var resultado = document.getElementById("resultado");

    if (unidade === "celsius") {
      var fahrenheit = temperatura * 9/5 + 32;
      var kelvin = parseFloat(temperatura) + 273.15;
      resultado.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
                            "Kelvin: " + kelvin.toFixed(2) + " K";
    } else if (unidade === "fahrenheit") {
      var celsius = (temperatura - 32) * 5/9;
      var kelvin = (temperatura - 32) * 5/9 + 273.15;
      resultado.innerHTML = "Celsius: " + celsius.toFixed(2) + " °C<br>" +
                            "Kelvin: " + kelvin.toFixed(2) + " K";
    } else if (unidade === "kelvin") {
      var celsius = parseFloat(temperatura) - 273.15;
      var fahrenheit = (temperatura - 273.15) * 9/5 + 32;
      resultado.innerHTML = "Celsius: " + celsius.toFixed(2) + " °C<br>" +
                            "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    }

    // Alterar a cor de fundo com base na temperatura
    if (temperatura <= 20) {
      document.body.style.backgroundColor = "#6495ED"; // Azul claro
    } else if (temperatura >= 21 && temperatura < 60) {
      document.body.style.backgroundColor = "#FFD700"; // Amarelo
    } else if (temperatura >= 61){
      document.body.style.backgroundColor = "#FF6347"; // Vermelho
    }
  }
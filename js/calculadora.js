calcularMedia = () => {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);

  // Verifica se as notas são valores numéricos
  if (isNaN(nota1) || isNaN(nota2)) {
    document.getElementById("media").innerHTML = "";
    document.getElementById("mensagem").innerHTML =
      "Por favor, preencha as duas notas corretamente com valores numéricos.";
    document.getElementById("mensagem").style.color = "red";

    // Adiciona mensagem de erro nos inputs
    if (isNaN(nota1)) {
      document
        .getElementById("nota1")
        .setCustomValidity("Insira um valor numérico.");
    } else {
      document.getElementById("nota1").setCustomValidity("");
    }
    if (isNaN(nota2)) {
      document
        .getElementById("nota2")
        .setCustomValidity("Insira um valor numérico.");
    } else {
      document.getElementById("nota2").setCustomValidity("");
    }

    return;
  }

  // Verifica se as notas estão dentro do intervalo permitido
  if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0) {
    document.getElementById("media").innerHTML = "";
    document.getElementById("mensagem").innerHTML =
      "Por favor, preencha as duas notas com valores entre 0 e 10.";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  // Remove as mensagens de erro nos inputs
  document.getElementById("nota1").setCustomValidity("");
  document.getElementById("nota2").setCustomValidity("");

  // Calcula a média e exibe o resultado
  const media = (nota1 + nota2) / 2;
  const PrecisoTirar = Math.abs(media - 10);

  document.getElementById("media").innerHTML =
    "A sua média é: " + media.toFixed(2);

  // Verifica se o aluno foi aprovado, reprovado ou está de recuperação
  if (media >= 7.0) {
    document.getElementById("mensagem").innerHTML = "Você está Aprovado!";
    document.getElementById("mensagem").style.color = "green";
  } else if (media >= 4.0) {
    document.getElementById("mensagem").innerHTML = "Você está de Recuperação!";
    document.getElementById("mensagem").style.color = "orange";
    document.getElementById("notaFinal").innerHTML =
      "Nota na final para ser aprovado: " + PrecisoTirar;

    document.getElementById("notaFinal").style.color = "blue";
  } else {
    document.getElementById("mensagem").innerHTML =
      "Você está Reprovado! Faz o L kkk";
    document.getElementById("mensagem").style.color = "red";
  }
};

// Função de Limpar Campos
LimparCampos = () => {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("media").innerHTML = "";
  document.getElementById("mensagem").innerHTML = "";
  document.getElementById("notaFinal").innerHTML = "";
};

window.addEventListener("DOMContentLoaded", function () {
     var numero = document.getElementById("numero");
     var nivelSelect = document.getElementById("nivel");
     var nivel = nivelSelect.options[nivelSelect.selectedIndex].value;
     var btnIniciar = document.getElementById("btnIniciar");
     var btnPausar = document.getElementById("btnPausar");
     var btnParar = document.getElementById("btnParar");
     var tempo = document.getElementById("tempo");
     var acertos = document.getElementById("acertos");
     var erros = document.getElementById("erros");

     var idIntervalo;

     btnIniciar.addEventListener("click", function () {
          nivel = nivelSelect.options[nivelSelect.selectedIndex].value;
          if (nivel == 0) {
               alert("Selecione o nível desejado");
          } else if (nivel == 1) {
               habilitarBotao(btnPausar);
               habilitarBotao(btnParar);
               atualizaCorFundoBotaoCinza(btnIniciar);
               atualizaCorFundoBotaoRoxo(btnPausar);
               atualizaCorFundoBotaoRoxo(btnParar);
               desabilitarBotao(btnIniciar);
               var tempoRestante = 105;
               idIntervalo = setInterval(function () {
                    var minutos = Math.floor(tempoRestante / 60);
                    var segundos = tempoRestante % 60;
                    tempo.textContent =
                         minutos + "'" + (segundos < 10 ? "0" : "") + segundos + '"';
                    tempoRestante--;

                    geraNumeroAleatorio();

                    if (tempoRestante < 0) {
                         clearInterval(idIntervalo);
                         tempo.textContent = "0";
                    }
               }, 2000);
          }
     });

     btnPausar.addEventListener("click", function () {
          clearInterval(idIntervalo);
          habilitarBotao(btnIniciar);
          habilitarBotao(btnParar);
          desabilitarBotao(btnPausar);
          atualizaCorFundoBotaoCinza(btnPausar);
          atualizaCorFundoBotaoRoxo(btnIniciar);
          atualizaCorFundoBotaoRoxo(btnParar);
     });

     btnParar.addEventListener("click", function () {
          clearInterval(idIntervalo);
          numero.textContent = "0";
          tempo.textContent = "0";
          habilitarBotao(btnIniciar);
          habilitarBotao(btnPausar);
          desabilitarBotao(btnParar);
          atualizaCorFundoBotaoCinza(btnParar);
          atualizaCorFundoBotaoRoxo(btnIniciar);
          atualizaCorFundoBotaoRoxo(btnPausar);
     });

     numero.addEventListener("click", function () {
          var numeroAtual = parseInt(numero.textContent);
          if (numeroAtual % 2 === 0) {
               numero.style.color = "green";
               acertos.textContent = parseInt(acertos.textContent) + 1;
          } else {
               numero.style.color = "red";
               erros.textContent = parseInt(erros.textContent) + 1;
          }
          setTimeout(function () {
               numero.style.color = "black";
          }, 500);
     });

     function geraNumeroAleatorio() {
          var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
          numero.textContent = numeroAleatorio;
     }

     function atualizaCorFundoBotaoCinza(botao) {
          botao.setAttribute("style", "background-color: #ccc;");
     }

     function atualizaCorFundoBotaoRoxo(botao) {
          botao.setAttribute("style", "background-color: darkviolet;");
     }

     function desabilitarBotao(botao) {
          botao.disabled = true;
     }

     function habilitarBotao(botao) {
          botao.disabled = false;
     }
});

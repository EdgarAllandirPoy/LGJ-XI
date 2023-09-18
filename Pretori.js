document.addEventListener('DOMContentLoaded', function() {
    // Gerar um número aleatório entre 1 e 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 10; // Número de tentativas
    let resultElement = document.getElementById('result');
    let guessInput = document.getElementById('guess');
    let submitButton = document.getElementById('submit');

    function checkGuess() {
        let userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultElement.textContent = "Por favor, insira um número válido entre 1 e 100.";
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            resultElement.textContent = `Parabéns! Você acertou o número ${randomNumber}.`;
            submitButton.disabled = true;
        } else {
            resultElement.textContent = `Tentativas restantes: ${attempts}`;
            resultElement.style.color = 'red';
            if (attempts === 0) {
                resultElement.textContent = `Suas tentativas acabaram. O número era ${randomNumber}.`;
                submitButton.disabled = true;
            } else {
                resultElement.textContent += userGuess < randomNumber ? '. Tente um número maior.' : '. Tente um número menor.';
            }
        }
    }

    submitButton.addEventListener('click', checkGuess);
});

///*document.addEventListener('DOMContentLoaded', function() {...}:
//Este código aguarda até que o documento HTML tenha sido completamente carregado antes de executar qualquer JavaScript. Isso garante que todos os elementos do HTML estejam disponíveis antes de interagirmos com eles.

//const randomNumber = Math.floor(Math.random() * 100) + 1;:
//Isso gera um número aleatório entre 1 e 100 e armazena-o na variável randomNumber.

//let attempts = 5;:
//Define o número de tentativas que o jogador terá para adivinhar o número.

//let resultElement = document.getElementById('result');:
//Obtém a referência ao elemento HTML com o ID result. Isso é onde os resultados do jogo serão exibidos.

//let guessInput = document.getElementById('guess');:
//Obtém a referência ao elemento de entrada (<input>) onde o jogador insere seus palpites.

//let submitButton = document.getElementById('submit');:
//Obtém a referência ao botão (<button>) que o jogador pressiona para enviar seu palpite.

//function checkGuess() {...}:
//Esta é a função que é chamada quando o jogador clica no botão de envio.

//let userGuess = parseInt(guessInput.value);:
//Obtém o palpite do jogador convertendo o valor do campo de entrada em um número inteiro usando parseInt().

//if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {...}:
//Esta condicional verifica se o palpite é válido (ou seja, é um número entre 1 e 100). Se não for, exibe uma mensagem de erro.

//attempts--;:
//Reduz o número de tentativas disponíveis após cada palpite.

//if (userGuess === randomNumber) {...}:
//Verifica se o palpite do jogador é igual ao número aleatório gerado. Se for, significa que o jogador acertou.

//resultElement.textContent = ...:
//Define o texto a ser exibido no elemento result.

//submitButton.disabled = true;:
//Desabilita o botão de envio após o jogo ser concluído (seja com uma vitória ou quando as tentativas se esgotam).

//resultElement.style.color = 'red';:
//Define a cor do texto do elemento result como vermelho. Isso é usado para destacar as mensagens de erro.

//resultElement.textContent += ...:
//Adiciona mais texto à mensagem que já está no elemento result.

//userGuess < randomNumber ? '. Tente um número maior.' : '. Tente um número menor.';:
//Esta é uma operação ternária que fornece uma dica ao jogador com base no palpite.

//submitButton.addEventListener('click', checkGuess);:
//Adiciona um ouvinte de evento ao botão de envio. Isso significa que quando o botão é clicado, a função checkGuess será executada.
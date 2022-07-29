## Code

Entendemos primeiramente que a página só será carregada a partir de que a iniciemos a contagem... Bom e a primeira coisa a se fazer é carregar as variáveis:

```jsx
  let = seconds = 00;
  let appendSeconds = document.getElementById("seconds");
  let tens = 00;
  let appendTens = document.getElementById("tens");

  let btnStart = document.getElementById("start");
  let btnStop = document.getElementById("stop");
  let btnReset = document.getElementById("reset");

  let interval;
```

## As funções para o HTML...

Depois de todas as variáveis assim criadas, oque basta é fazer com que coloque realmente função a esses botões.

```jsx
btnStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
```

A função acima, usa uma função já conhecida no JS, **```clearInterval```** acessada por <a href="https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/#:~:text=The%20clearInterval%20%28%29%20function%20in%20javascript%20clears%20the,the%20passed%20function%20for%20the%20given%20time%20interval.">aqui</a>.

**Ela faz a função de inicializar um timeOut de em 10 milésimos de segundo, que fará a função secundária como parâmetro (startTimer), que é definida a seguir...**

## **Essa é a função padrão de cronômetro!⏱️**

```jsx
function startTimer(){
    tens++;
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    };
    if(tens > 9){
      appendTens.innerHTML = tens;
    };
    if(tens > 99){
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    };
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    };
  };
```

**Função de cronômetro, obviamente já começamos dizendo que os milésimos devem começar a ser acrescidos, começando um relógio de cronômetro, e assim, as outras condicionais, só dizem como seguir a partir do número 9...**

**E assim, o trabalho só seria transformar a variável de JS, em um elemento HTML diretamente no código, feito com as variáveis de append**

### O caso de erro...

Basicamente, as condicionais, só dizem para que tanto os milésimos e segundos possam continuar sendo acrescidos, e mesmo assim não pulem a uma operação não matemática, como contar "122" milésimos de segundo e não "1:22" como é o correto!

## Stop and Reset

**As funções servem basicamente a dizer, a stop, para fazer oque a função de **```clearInterval```** já faz por conta prórpria, e a de reset, de conseguir parar a função em JS, e mesmo assim, eliminar todo dado e zerar no HTML, como mostra o código a seguir:**

```jsx
btnStop.onclick = () => {
    clearInterval(interval);
  };
  btnReset.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";

    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  };
```
#
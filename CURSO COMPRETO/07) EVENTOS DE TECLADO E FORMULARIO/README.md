# EVENTOS DE TECLADO E FORMULARIO
Os eventos de teclado no jQuery são acionados quando o usuário interage com o teclado, como pressionar e soltar teclas. Esses eventos são úteis para validar entradas do usuário em formulários ou para criar funcionalidades de atalho de teclado. Aqui estão alguns dos principais eventos de teclado e como usá-los:

## Eventos de Teclado Principais:
1. **keydown**: Acionado quando uma tecla é pressionada.
2. **keyup**: Acionado quando uma tecla é solta.
3. **keypress**: Acionado quando uma tecla é pressionada e solta.

## Exemplos de Uso:
### 1. Evento `keydown`:
```javascript
$(document).keydown(function(event){
    alert("Tecla pressionada: " + event.key);
});
```

### 2. Evento `keyup`:
```javascript
$(document).keyup(function(event){
    if (event.key === "Enter") {
        alert("Você soltou a tecla Enter");
    }
});
```

### 3. Evento `keypress`:
```javascript
$(document).keypress(function(event){
    if (event.key === "a" || event.key === "A") {
        alert("Você pressionou a tecla 'a'");
    }
});
```

## Aplicação em um Formulário:
Os eventos de teclado são frequentemente usados em conjunto com formulários para validar entradas do usuário em tempo real ou para adicionar funcionalidades de envio de formulário com atalhos de teclado. Aqui está um exemplo simples:

```html
<form id="myForm">
    <label for="username">Nome de Usuário:</label>
    <input type="text" id="username" name="username">
    <br>
    <label for="password">Senha:</label>
    <input type="password" id="password" name="password">
    <br>
    <button type="submit">Enviar</button>
</form>
```

```javascript
$(document).ready(function(){
    $("#username").keyup(function(){
        if ($(this).val().length < 5) {
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "1px solid green");
        }
    });

    $("#myForm").submit(function(event){
        event.preventDefault();
        // Aqui você pode adicionar lógica para enviar o formulário via AJAX ou fazer outras operações.
        alert("Formulário enviado!");
    });
});
```

Neste exemplo, o evento `keyup` é usado para validar o campo de nome de usuário em tempo real, mudando a borda para vermelho se o número de caracteres for menor que 5, e para verde caso contrário. O evento `submit` é usado para capturar o envio do formulário e executar uma ação personalizada, neste caso, exibindo um alerta.
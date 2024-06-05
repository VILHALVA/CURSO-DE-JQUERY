# EVENTOS DE MOUSE
Os eventos de mouse no jQuery são acionados quando o mouse interage com os elementos da página. Esses eventos incluem ações como clicar, mover o mouse sobre, pressionar e soltar botões do mouse. Aqui estão alguns dos principais eventos de mouse e como usá-los:

## Eventos de Mouse Principais:
1. **click**: Acionado quando um elemento é clicado com o botão do mouse.
2. **dblclick**: Acionado quando um elemento é clicado duas vezes rapidamente com o botão do mouse.
3. **mousedown**: Acionado quando um botão do mouse é pressionado sobre um elemento.
4. **mouseup**: Acionado quando um botão do mouse é solto após ser pressionado.
5. **mousemove**: Acionado quando o mouse é movido enquanto está sobre um elemento.
6. **mouseover**: Acionado quando o mouse entra na área de um elemento.
7. **mouseout**: Acionado quando o mouse deixa a área de um elemento.

## Exemplos de Uso:
### 1. Evento `click`:
```javascript
$("#elemento").click(function(){
    alert("Você clicou no elemento!");
});
```

### 2. Evento `mouseover` e `mouseout`:
```javascript
$("#elemento").mouseover(function(){
    $(this).css("background-color", "yellow");
});

$("#elemento").mouseout(function(){
    $(this).css("background-color", "white");
});
```

### 3. Evento `mousemove`:
```javascript
$(document).mousemove(function(event){
    $("#posicaoMouse").text("Posição do Mouse: " + event.pageX + ", " + event.pageY);
});
```

## Aplicação em um Projeto de Exemplo:
Vamos adicionar esses eventos de mouse em um projeto de exemplo para demonstrar como eles podem ser utilizados.

### Estrutura do Projeto:
```
projeto-eventos-mouse/
│
├── index.html
└── js/
    └── script.js
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Eventos Mouse jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 10px;
        }
        #elemento {
            width: 200px;
            height: 100px;
            background-color: lightblue;
            text-align: center;
            line-height: 100px;
            cursor: pointer;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Exemplo de Eventos de Mouse jQuery</h2>
        <div id="elemento">Clique ou Passe o Mouse</div>
        <div id="posicaoMouse">Posição do Mouse: </div>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
```

### `js/script.js`
```javascript
$(document).ready(function(){
    // Evento click
    $("#elemento").click(function(){
        alert("Você clicou no elemento!");
    });

    // Evento mouseover e mouseout
    $("#elemento").mouseover(function(){
        $(this).css("background-color", "yellow");
    });

    $("#elemento").mouseout(function(){
        $(this).css("background-color", "lightblue");
    });

    // Evento mousemove
    $(document).mousemove(function(event){
        $("#posicaoMouse").text("Posição do Mouse: " + event.pageX + ", " + event.pageY);
    });
});
```

Este projeto contém uma página HTML simples com um elemento `<div>` que demonstra os eventos de mouse: `click`, `mouseover`, `mouseout` e `mousemove`. Cada evento modifica o comportamento ou a aparência do elemento de alguma forma, proporcionando uma interação dinâmica com o usuário.
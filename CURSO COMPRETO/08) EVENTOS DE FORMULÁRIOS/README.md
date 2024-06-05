# EVENTOS DE FORMULÁRIOS
Os eventos de formulário no jQuery são acionados quando ocorrem interações com os elementos de formulário, como envio, reset e alterações nos valores dos campos. Esses eventos são úteis para validar entradas do usuário, enviar dados para o servidor e executar ações específicas com base nas interações do usuário. Aqui estão alguns dos principais eventos de formulário e como usá-los:

## Eventos de Formulário Principais:
1. **submit**: Acionado quando um formulário é enviado.
2. **reset**: Acionado quando um formulário é resetado para seus valores padrão.
3. **change**: Acionado quando o valor de um campo de formulário é alterado e o foco é perdido.
4. **focus**: Acionado quando um elemento de formulário recebe o foco.
5. **blur**: Acionado quando um elemento de formulário perde o foco.

## Exemplos de Uso:
### 1. Evento `submit`:
```javascript
$("#meuFormulario").submit(function(event){
    event.preventDefault(); // Evita o envio do formulário padrão
    // Lógica de validação e envio do formulário
});
```

### 2. Evento `reset`:
```javascript
$("#meuFormulario").on("reset", function(){
    // Limpar campos ou redefinir valores
});
```

### 3. Evento `change`:
```javascript
$("#meuCampo").change(function(){
    // Lógica para lidar com a alteração no valor do campo
});
```

### 4. Eventos `focus` e `blur`:
```javascript
$("#meuCampo").focus(function(){
    // Lógica a ser executada quando o campo recebe o foco
});

$("#meuCampo").blur(function(){
    // Lógica a ser executada quando o campo perde o foco
});
```

## Aplicação em um Projeto de Exemplo:
Vamos criar um projeto simples que demonstre o uso de eventos de formulário no jQuery.

### Estrutura do Projeto:
```
projeto-eventos-formulario/
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
    <title>Projeto Eventos de Formulário jQuery</title>
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
        label {
            display: block;
            margin-bottom: 10px;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Evento de Formulário jQuery</h2>
        <form id="meuFormulario">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Enviar</button>
        </form>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
```

### `js/script.js`
```javascript
$(document).ready(function(){
    // Evento submit
    $("#meuFormulario").submit(function(event){
        event.preventDefault(); // Evita o envio do formulário padrão
        var nome = $("#nome").val();
        var email = $("#email").val();
        // Aqui você pode adicionar lógica para enviar o formulário via AJAX ou fazer outras operações.
        alert("Formulário enviado com sucesso!\nNome: " + nome + "\nEmail: " + email);
        // Limpa os campos após o envio do formulário
        $(this).trigger("reset");
    });

    // Evento change
    $("#nome").change(function(){
        alert("O valor do campo Nome foi alterado para: " + $(this).val());
    });

    // Evento focus
    $("#email").focus(function(){
        $(this).css("border-color", "blue");
    });

    // Evento blur
    $("#email").blur(function(){
        $(this).css("border-color", "#ccc");
    });
});
```

Neste projeto, temos um formulário simples com campos para nome e email. Os eventos de formulário jQuery são usados para capturar a submissão do formulário, lidar com alterações nos campos e aplicar estilos quando os campos recebem ou perdem o foco. Ao enviar o formulário, os dados são exibidos em um alerta e os campos são limpos.
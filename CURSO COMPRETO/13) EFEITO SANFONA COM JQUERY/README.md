# EFEITO SANFONA COM JQUERY
Para criar um efeito sanfona (accordion) com jQuery, podemos usar a função `slideToggle()` para mostrar e ocultar os conteúdos conforme o usuário interage com os itens do menu. Vou mostrar como fazer isso:

## Estrutura do Projeto:
```
projeto-sanfona/
│
├── index.html
└── css/
    └── styles.css
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
    <title>Efeito Sanfona com jQuery</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="accordion">
        <div class="item">
            <h2 class="trigger">Item 1</h2>
            <div class="content">
                <p>Conteúdo do item 1...</p>
            </div>
        </div>
        <div class="item">
            <h2 class="trigger">Item 2</h2>
            <div class="content">
                <p>Conteúdo do item 2...</p>
            </div>
        </div>
        <div class="item">
            <h2 class="trigger">Item 3</h2>
            <div class="content">
                <p>Conteúdo do item 3...</p>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
```

### `css/styles.css`
```css
body {
    font-family: Arial, sans-serif;
}

.accordion {
    width: 100%;
}

.item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.trigger {
    padding: 10px;
    cursor: pointer;
    background-color: #f2f2f2;
}

.content {
    padding: 10px;
    display: none;
}
```

### `js/script.js`
```javascript
$(document).ready(function(){
    $(".trigger").click(function(){
        // Fecha todos os itens abertos
        $(".content").slideUp();
        // Abre o conteúdo do item clicado
        $(this).next(".content").slideToggle();
    });
});
```

Neste exemplo, cada item do menu é composto por um cabeçalho (`h2` com a classe `.trigger`) e um conteúdo (div com a classe `.content`). O CSS é usado para definir o estilo do menu e os itens. O JavaScript é responsável por adicionar o efeito sanfona, alternando a visibilidade do conteúdo quando o usuário clica no cabeçalho.

A função `slideToggle()` faz o trabalho de mostrar e ocultar o conteúdo de forma suave, dando o efeito sanfona. Ao clicar em um item, ele fecha todos os outros itens e abre apenas o conteúdo do item clicado.
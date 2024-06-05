# CRIANDO UM MENU FIXO - ADDCLASS E REMOVECLASS
Vamos criar um exemplo de menu fixo utilizando as funções `addClass` e `removeClass` do jQuery para adicionar e remover uma classe que tornará o menu fixo quando o usuário rolar a página para baixo.

## Estrutura do Projeto:
```
projeto-menu-fixo/
│
├── index.html
└── css/
    └── style.css
└── js/
    └── script.js
```

## `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Menu Fixo</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <header id="header">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
    <div id="conteudo">
        <!-- Conteúdo da Página -->
        <h1>Conteúdo da Página</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat velit.</p>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
```

## `css/style.css`
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

#header {
    background-color: #333;
    padding: 10px 0;
    position: relative;
    width: 100%;
    z-index: 1000;
}

#header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

#header nav ul li {
    display: inline-block;
    margin-right: 20px;
}

#header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

#conteudo {
    padding: 20px;
    height: 1500px; /* Apenas para simular um conteúdo longo */
}
```

## `js/script.js`
```javascript
$(document).ready(function(){
    var header = $("#header");
    var headerHeight = header.height();
    var conteudo = $("#conteudo");

    $(window).scroll(function(){
        if ($(this).scrollTop() > headerHeight) {
            header.addClass("fixo");
            conteudo.css("padding-top", headerHeight);
        } else {
            header.removeClass("fixo");
            conteudo.css("padding-top", 0);
        }
    });
});
```

Neste exemplo, o menu é inicialmente posicionado no topo da página. Ao rolar a página para baixo, o script jQuery detecta o scroll e adiciona uma classe `fixo` ao menu e ajusta o padding do conteúdo para manter a aparência da página.

A classe `fixo` é definida no arquivo CSS `style.css` para fixar o menu no topo da página quando a classe é aplicada.

Você pode personalizar o estilo do menu fixo e ajustar os valores de altura conforme necessário para atender às suas necessidades de design.